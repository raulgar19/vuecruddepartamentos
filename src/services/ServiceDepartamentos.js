import Global from "@/Global";
import axios from "axios";

export default class ServiceDepartamentos {
  getDepartamentos() {
    return new Promise(function (resolve) {
      var url = Global.urlApiDepartamentos;
      var request = "api/departamentos";

      axios.get(url + request).then((response) => {
        console.log("Obteniendo departamentos...");
        resolve(response.data);
      });
    });
  }

  getDepartamento(id) {
    return new Promise(function (resolve) {
      var url = Global.urlApiDepartamentos;
      var request = "api/departamentos/" + id;

      axios.get(url + request).then((response) => {
        console.log("Obteniendo departamento...");
        resolve(response.data);
      });
    });
  }

  createDepartamento(departamento) {
    return new Promise(function (resolve) {
      var url = Global.urlApiDepartamentos;
      var request = "api/departamentos";

      axios.post(url + request, departamento).then((response) => {
        console.log("Departamento creado");
        resolve(response.data);
      });
    });
  }

  updateDepartamento(departamento) {
    return new Promise(function (resolve) {
      var url = Global.urlApiDepartamentos;
      var request = "api/departamentos";

      axios.put(url + request, departamento).then((response) => {
        console.log("Departamento modificado");
        resolve(response);
      });
    });
  }

  deleteDepartamento(id) {
    return new Promise(function (resolve) {
      var url = Global.urlApiDepartamentos;
      var request = "api/departamentos/" + id;

      axios.delete(url + request).then((response) => {
        console.log("Departamento eliminado");
        resolve(response);
      });
    });
  }
}
