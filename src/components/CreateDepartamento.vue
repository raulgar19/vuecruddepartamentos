<template>
  <div class="container">
    <h1>Crear departamento</h1>
    <form v-on:submit.prevent="createDepartamento()">
      <label class="form-label">Id Departamento</label>
      <input class="form-control" type="number" v-model="departamento.numero" />
      <label class="form-label">Nombre</label>
      <input class="form-control" type="text" v-model="departamento.nombre" />
      <label class="form-label">Localidad</label>
      <input
        class="form-control"
        type="text"
        v-model="departamento.localidad"
      />
      <br />
      <button class="btn btn-info mt-2">Create</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from "@/services/ServiceDepartamentos";

const service = new ServiceDepartamentos();

export default {
  name: "CreateDepartamento",
  data() {
    return {
      departamento: {
        numero: 0,
        nombre: "",
        localidad: "",
      },
    };
  },
  methods: {
    createDepartamento() {
      service.createDepartamento(this.departamento).then(() => {
        this.$router.push("/");
      });
    },
  },
};
</script>

<style></style>
