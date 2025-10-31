<template>
  <div class="container">
    <h1>Modificar departamento</h1>
    <router-link to="/">Back to index</router-link>
    <form
      v-if="departamento !== null"
      v-on:submit.prevent="updateDepartamento()"
    >
      <input
        disabled
        class="form-control"
        type="number"
        v-model="departamento.numero"
      />
      <label class="form-label">Nombre</label>
      <input class="form-control" type="text" v-model="departamento.nombre" />
      <label class="form-label">Localidad</label>
      <input
        class="form-control"
        type="text"
        v-model="departamento.localidad"
      />
      <br />
      <button class="btn btn-info">Actualizar</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from "@/services/ServiceDepartamentos";

const service = new ServiceDepartamentos();

export default {
  name: "UpdateDepartamento",
  data() {
    return {
      departamento: null,
    };
  },
  methods: {
    updateDepartamento() {
      service.updateDepartamento(this.departamento).then(() => {
        this.$router.push(
          "/details/" +
            this.departamento.numero +
            "/" +
            this.departamento.nombre +
            "/" +
            this.departamento.localidad
        );
      });
    },
  },
  mounted() {
    service.getDepartamento(this.$route.params.id).then((result) => {
      this.departamento = result;
    });
  },
};
</script>

<style></style>
