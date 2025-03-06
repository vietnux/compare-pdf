const comparePdf = require("compare-pdf");
const fs = require('fs');
const config = require("../config");

class PDF {

    /**
     * By passing "byBase64" as the comparison type parameter in the compare method, 
     * the pdfs will be compared whether the actual and baseline's converted file in base64 format 
     * are the same.
     */
    Basic = async () => {
        // if("Should be able to verify same PDFs", async () => {
        let comparisonResults = await new comparePdf()
            .actualPdfFile("same.pdf")
            .baselinePdfFile("baseline.pdf")
            .compare();
        expect(comparisonResults.status).to.equal("passed");
        // });

        // if("Should be able to verify different PDFs", async () => {
        //     const ComparePdf = new comparePdf();
        //     let comparisonResults = await ComparePdf.actualPdfFile("notSame.pdf")
        //         .baselinePdfFile("baseline.pdf")
        //         .compare("byImage");
        //     expect(comparisonResults.status).to.equal("failed");
        //     expect(comparisonResults.message).to.equal("notSame.pdf is not the same as baseline.pdf.");
        //     expect(comparisonResults.details).to.not.be.null;
        // });
    }

    /**
     * You can also directly pass buffers instead of filepaths.
     * Should be able to verify same PDFs using direct buffer
     */
    BasicBuffer = async (actualPdfFilename, baselinePdfFilename) => {
        const actualPdfBuffer = fs.readFileSync(`${config.paths.data}/${actualPdfFilename}`);
        const baselinePdfBuffer = fs.readFileSync(`${config.paths.data}/${baselinePdfFilename}`);
        let comparisonResults = null;
        let comparisonResultsByBase64 = await new comparePdf(config)
            .actualPdfBuffer(actualPdfBuffer, actualPdfFilename)
            .baselinePdfBuffer(baselinePdfBuffer, baselinePdfFilename)
            .compare('byBase64');
        // expect(comparisonResults.status).to.equal('passed');
        if (comparisonResultsByBase64.status === "failed") {
            let comparisonResultsByImage = await new comparePdf()
                .actualPdfBuffer(actualPdfBuffer, actualPdfFilename)
                .baselinePdfBuffer(baselinePdfBuffer, baselinePdfFilename)
                .compare("byImage");
            // expect(comparisonResultsByImage.status).to.equal("failed");
            // expect(comparisonResultsByImage.message).to.equal(
            //     "notSame.pdf is not the same as baseline.pdf compared by their images."
            // );
            // expect(comparisonResultsByImage.details).to.not.be.null;
            comparisonResults = comparisonResultsByImage;
        } else {
            comparisonResults = comparisonResultsByBase64;
        }

        console.log(comparisonResults);
        return comparisonResults;
    }
}

exports.PDF = new PDF();