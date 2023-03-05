<template>
  <div>
    <b-modal id="edit-modal" title="تعديل المحتوي" hide-footer>
      <form ref="form" @submit.stop.prevent="editItem">
        <b-form-group
          label="المحتوي"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            v-model="form.instruction"
            id="name-input"
            required
          ></b-form-input>
          <div class="d-flex justify-content-end">
            <button class="btn btn-primary mt-3">تعديل</button>
          </div>
        </b-form-group>
      </form>
    </b-modal>
  </div>
</template>

<script>
import http from "@/axios";
export default {
  props: {
    obj: {
      type: Object,
      default: () => {},
    },
    itemAll: { type: Array },
  },
  data() {
    return {
      index: "",
      items: [],
      form: {
        instruction: "",
      },
    };
  },
  watch: {
    obj() {
      const { data, index } = this.obj;
      this.form.instruction = data.instruction;
      console.log(data);
      this.index = index;
    },
  },
  methods: {
    editItem() {
      http.put(`admin/inetructions/${this.obj.id}`, this.form).then((res) => {
        this.form = res.data.data;
        this.$bvModal.hide("edit-modal");
      });
    },
  },
};
</script>

<style></style>
