import axios from "axios";
import Swal from "sweetalert2";

export const REGISTER = "REGISTER";
export const LOGIN = "LOGIN";
export const GET_ERROR = "GET_ERROR";
export const ATTENDANCE = "ATTENDANCE"

export const setRegister = (data) => {
  return {
    type: REGISTER,
    payload: data,
  };
};

export const setLogin = (data) => {
  return {
    type: LOGIN,
    payload: data,
  };
};

export const getError = (data) => {
  return {
    type: GET_ERROR,
    payload: data,
  };
};

export const registerActions = (values, e, history) => (dispatch) => {
  e.preventDefault();

  if (values.username.length < 3) {
    // alert("Username minimal 3 karakter");
    Swal.fire({
      icon: 'error',
      title: 'Registrasi Gagal',
      text: 'Username Minimal 3 Karakter'
    })
    return false;
  }

  if (values.name.length < 3) {
    // alert("Name minimal 3 karakter");
    Swal.fire({
      icon: 'error',
      title: 'Registrasi Gagal',
      text: 'Nama Minimal 3 Karakter'
    })
    return false;
  }


  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!mailformat.test(values.email)) {
    // alert("Harap memasukkan email dengan benar");
    Swal.fire({
      icon: 'error',
      title: 'Registrasi Gagal',
      text: 'Harap Memasukkan Email Dengan Benar'
    })
    return false;
  }

  if (values.password.length < 6) {
    // alert("Password minimal 6 karakter");
    Swal.fire({
      icon: 'error',
      title: 'Registrasi Gagal',
      text: 'Password Minimal 6 Karakter'
    })
    return false;
  }

  if (values.role === "") {
    // alert("Harap memilih role");
    Swal.fire({
      icon: 'error',
      title: 'Registrasi Gagal',
      text: 'Harap Memilih Role'
    })
    return false;
  }

  console.log("tes param", values);

  return axios
    .post(
      API,
      values
    )
    .then((response) => {
      console.log("res", response);
      localStorage.setItem("token", response.data);

      dispatch(setRegister);
      history.push("/");
      let timerInterval
      Swal.fire({
        title: 'Creating...',
        html: 'I will close in <b></b> milliseconds.',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      }).then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Registrasi Berhasil',
          text: 'Silahkan Login Lagi'
        }).then(() => {
          window.location.reload();
        })
      })
      // alert("Pendaftaran berhasil");
    })
    .catch((error) => {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Registrasi Gagal',
        text: error.response.data
      })
    });
};

export const loginActions = (values, e, history) => {
  return (dispatch) => {
    e.preventDefault();
    console.log("tes param", values);

    return axios
      .post(
        API,
        values
      )
      .then((response) => {
        console.log("res", response.data);
        if (response.data !== undefined) {
          console.log("token ada");

          dispatch(setLogin(response.data));
          Swal.fire({
            icon: 'success',
            title: 'Login Berhasil',
            text: 'Selamat Datang'
          }).then(() => {
            history.push("/employee");
          })

          localStorage.setItem("token", response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch(getError(error.response.data));
        Swal.fire({
          icon: 'error',
          title: 'Login Gagal',
          text: error.response.data
        })
      });
  };
};