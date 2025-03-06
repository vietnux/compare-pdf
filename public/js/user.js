onLogin = async () => {
   dataloading()
   let email = $('#email').val();
   let password = $('#password').val();
   // setErrortext('');
   if (!email) {
      alert('Bạn chưa nhập số điện thoại đăng nhập');
      return;
   }
   if (!password) {
      alert('Bạn chưa nhập mật khẩu');
      return;
   }
   let dataToSend = {
      email: email,
      password: password,
   };
   
   return await window.API.login(dataToSend).then(rs => {
      console.log(rs);
      console.log("Done login!");
      if( rs.error != 0 ) {
         alert( rs.message );
      }
      dataloadingclose();
   }).catch(e => {
      dataloadingclose();
   });
};

onRegis = async () => {
   dataloading()
   let email = $('#email').val();
   if (!email) {
     alert('Hãy nhập email');
     return;
   }
   let password = $('#password').val();
   
   let dataToSend = {
     email: email,
     password: password,
   };
   // console.log(base_url+'?mod=customer&act=api_regis&email='+this.state.email);
   return await window.API.regis(dataToSend).then(rs => {
       if (rs.error == 0) {
         if (rs.id > 0) {
          //  this.state.paramRegis.id = rs.id;
          //  this.state.paramRegis.step = rs.step;
          //  this.checkStep(rs);
         }
         isFillCode = true;
         userinit();
       }

       dataloadingclose();
       alert(rs.message);

     })
     .catch(error => {
       //Hide Loader
       dataloadingclose();
       console.error(error);
     });
 };

 comfimCode = () => {
   let code_regis = `${this.state.code_regis_1}${this.state.code_regis_2}${this.state.code_regis_3}${this.state.code_regis_4}${this.state.code_regis_5}${this.state.code_regis_6}`;
   if (code_regis.length < 6) {
     return Alert.alert("Lỗi", "Bạn chưa nhập đủ mã kích hoạt");
   }
   this.setLoading(true);
   let dataToSend = {
     code_regis: code_regis,//this.state.code_regis,
     email: this.state.email,
     isNew: this.state.isNew ? 1 : 0,
   };
   let body = [];
   let formBody;
   for (let key in dataToSend) {
     let encodedKey = encodeURIComponent(key);
     let encodedValue = encodeURIComponent(dataToSend[key]);
     body.push(encodedKey + '=' + encodedValue);
   }
   formBody = body.join('&');
   // console.log(formBody);
   fetch(base_url + '?mod=customer&act=api_checkcode', {
     method: 'POST',
     body: formBody,
     headers: {
       //Header Defination
       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
     },
   })
     .then(response => response.json())
     .then(rs => {
       if (rs.error == 0) {
         let userRegis = { id: this.state.paramRegis.id, code: this.state.code_regis, email: this.state.email, phone: this.state.phone, step: rs.step };
         // Users.setCode(this.state.code_regis); //paramRegis
         // Users.setEmail(this.state.email);
         // Users.setPhone(this.state.phone);
         // Users.id = this.state.paramRegis.id;
         // Users.step = rs.step;
         // console.log(userRegis);
         this.setState({ isLogin: false });
         this.setState({ isFillCode: false });
         this.props.navigation.navigate('ChangePassword', { 'userRegis': userRegis });
       } else {
         alert(rs.message);
       }
       this.setLoading(false);
     })
     .catch(error => {
       //Hide Loader
       this.setLoading(false);
       // console.error(error);
     });
 };

 var isLogin = true;
 var isFillCode = false;
 userinit = () => {
  $('#login').remove();
   if( isLogin && !isFillCode ) {
      fetch("screen/login.html").then(r => r.text()).then( html => {
        $('body').append(html);
      })
   } else if( !isFillCode ) {
      fetch("screen/register.html").then(r => r.text()).then( html => {
         // console.log(html);
         $('body').append(html);
      })
   } else if( isFillCode ) {
      fetch("screen/comfmcode.html").then(r => r.text()).then( html => {
        $('body').append(html);
      })
   }
 }