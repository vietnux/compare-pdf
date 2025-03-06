const actions = {
   keysearch: '',
   removeRow: (id) => {
      $(id).parent().parent().remove();
   },
   clear: () => {
      $('.listImgLink').html('');
   },
   clearYl: () => {
      $('.listImgLink.row-yl').remove();
   },

   //https://www.amazon.com/s?k=King&i=fashion&hidden-keywords=%228.5+oz%2C+Classic+fit%2C+Twill-taped+neck%22+sweatshirt+-hoodie+-longsleeve

   search: () => {
      let sort = '';
      // Object.entries(amazon.sort).forEach(element => {
      //    console.log(element)
      //    sort += `<option value="${element.s}">${element.name}</option>`;
      // });
      for (x in amazon.sorts) {
         var element = amazon.sorts[x];
         sort += `<option value="${element.s}">${element.name}</option>`;
      }
      // console.log(sort)
      let html = `<div style="align-items:center;display:flex; flex-direction: column;with:100%">
                  <div class='form'>
                      <input name='text' value='${actions.keysearch}' placeholder='Nhập khoá tìm kiếm' id="setSearch"/>
                      <select id="platform" onchange='actions.buildSort()'>
                        <option value="1">Amazon</option>
                        <!-- <option value="2">Teepublic</option> -->
                        <option value="3">Redbubble</option>
                      </select>
                      <select id="category">
                        <option value="1">T-SHIRT</option>
                        <option value="2">LONG SLEEVE</option>
                        <option value="3">SWEATSHIRT</option>
                        <option value="4">HOODIE</option>
                        <option value="5">V-NECK</option>
                        <option value="6">RAGLAN</option>
                        <option value="7">TANK TOP</option>
                        <!-- <option value="8">POPSOCKET</option> -->
                        <!-- <option value="9">CASE</option> -->
                        <!-- <option value="10">THROW PILLOW</option> -->
                        <!-- <option value="11">TOTE BAG</option> -->
                      </select>
                      <select id="sort">${sort}</select>
                      </div>
                      </div>`
      overlays.ovlComfim(html, () => {
         var platform = $('#platform').val();
         actions.keysearch = $('#setSearch').val()
         // if ($('#setSearch').val() == '') {
         //    return;
         // }
         // console.log(domain);
         if (platform == 1)
            return amazon.search(actions.keysearch, $('#category').val(), null, $('#sort').val());
         else if (platform == 3)
            return redbubble.search(actions.keysearch, $('#category').val(), null, $('#sort').val());

      }, null, '40%')
   },
   importFilesLocal: async (paths) => {
      for (let i = 0; i < paths.length; i++) {
         let ele = paths[i];
         let name = ele.name.substring(0, ele.name.lastIndexOf('.'));
         let html_row = `<div class="tbrow" onclick='crawler.changePriview( this )'>
                        <div class='row-stt'>${$('.tbrow').length}</div>
                        <div class='row-url'>
                           <input type="text" value="`+ ele.path + `" placeholder="Nhập url hoặc mã ASIN amazon" id='' />
                        </div>
                        <div class='row-status'>Chờ</div>
                        <div class='row-action'>
                           <div class="btn load" onclick="crawler.load(this )" >&#8635;</div>
                           <div class="btn" id="save" onclick="crawler.save( this )">&#128190;</div>
                           <div class="btn btn-remove" id="removeRow"  onclick="actions.removeRow( this )">X</div>
                        </div>
                        <input type="hidden" name="filename" value="`+ name + `" />
                        <input type="hidden" name="img" value="`+ ele.path + `" class='img'/>
                     </div>`;
         $('#tbinput').append(html_row);
         $('#addUrlAsin').val('')
         await actions.convertLocal(ele.path, name)
      }


   },
   convertLocal: async (path, name) => {
      dataloading();
      let model = $('#modelList').val();
      let scale = $('#scaleVal').val();
      let format = $('#formatVal').val();
      return await window.API.convertLocal({ path: path, name: name, model: model, scale: scale, format: format }).then(rs => {
         console.log(rs);
         console.log("Done covert!");
         dataloadingclose();
      }).catch(e => {
         dataloadingclose();
      });
   },
   openDirectory: () => {
      window.API.openDirectory({}).then(rs => {
         console.log(rs);
         console.log("Done openDirectory!");
      });
   },

   //search sort
   buildSort: () => {

      let platform = $('#platform').val();
      let sort = '';
      // alert(platform);
      let sorts = platform == 1 ? amazon.sorts : (platform == 3 ? redbubble.sorts : amazon.sorts);
      for (x in sorts) {
         var element = sorts[x];
         sort += `<option value="${element.s}">${element.name}</option>`;
      }

      $('#sort').html(sort);
   }
}