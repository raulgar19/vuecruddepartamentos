<template>
  <div class="container">
    <h1>Departamentos</h1>
    <img src="../assets/images/loading.gif" alt="" v-if="status == false" />
    <table v-else class="table table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Nombre</th>
          <th>Localidad</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="departamento in departamentos" :key="departamento">
          <td>{{ departamento.numero }}</td>
          <td>{{ departamento.nombre }}</td>
          <td>{{ departamento.localidad }}</td>
          <td>
            <router-link
              class="btn btn-warning"
              :to="
                '/details/' +
                departamento.numero +
                '/' +
                departamento.nombre +
                '/' +
                departamento.localidad
              "
            >
              Detalles</router-link
            >
            <router-link
              class="btn btn-info ms-2"
              :to="'/update/' + departamento.numero"
            >
              Update
            </router-link>
            <router-link
              class="btn btn-danger ms-2"
              :to="/delete/ + departamento.numero"
            >
              Delete
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceDepartamentos from "@/services/ServiceDepartamentos";

const service = new ServiceDepartamentos();

export default {
  name: "DepartamentosComponent",
  data() {
    return {
      departamentos: [],
    };
  },
  methods: {
    getDepartamentos() {
      service.getDepartamentos().then((result) => {
        this.departamentos = result;
      });
    },
  },
  mounted() {
    this.getDepartamentos();
  },
};
</script>

<style></style>
