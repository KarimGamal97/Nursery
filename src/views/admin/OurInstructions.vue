<template>
  <div>
    <navbar-admin></navbar-admin>
    <!-- Start PopUp -->
    <div>
      <div class="d-flex justify-content-end p-2">
        <b-button v-b-modal.modal-prevent-closing>اضافة تعليمات</b-button>
      </div>
      <b-modal
        id="modal-prevent-closing"
        ref="modal"
        title="اضافة تعليمات جديدة"
        hide-footer
      >
        <form ref="form" @submit.stop.prevent="handleSubmit">
          <b-form-group
            label="المحتوي"
            label-for="name-input"
            invalid-feedback="Name is required"
          >
            <b-form-input
              id="name-input"
              v-model="form.guidance"
              required
            ></b-form-input>
            <div class="d-flex justify-content-end">
              <button class="btn btn-primary mt-3" @click="addItem">
                اضافة
              </button>
            </div>
          </b-form-group>
        </form>
      </b-modal>
    </div>
    <!-- End PopUp -->
    <b-table :items="items" :fields="fields" bordered>
      <template #cell(Settings)="data">
        <div class="d-flex justify-content-sm-evenly">
          <button class="btn btn-warning" @click="editData(data)">تعديل</button>
          <button class="btn btn-danger" @click="deleteData(data.index, data)">
            حذف
          </button>
        </div>
      </template>
    </b-table>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import http from "@/axios";
import NavbarAdmin from "@/components/admin/NavbarAdmin.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "OurInstructions",
  components: {
    FooterComp,
    NavbarAdmin,
  },
  data() {
    return {
      fields: [
        {
          key: "guidance",
          label: "تعليمات ",
          thStyle: {
            background: "#367db5",
            color: "#fff",
            border: "1px solid",
            textAlign: "center",
          },
        },
        {
          key: "Settings",
          label: "الاعدادات",
          thStyle: {
            background: "#367db5",
            color: "#fff",
            border: "1px solid",
            textAlign: "center",
          },
        },
      ],
      items: [],
      form: {
        guidance: "",
      },
    };
  },
  methods: {
    async getData() {
      try {
        await http.get("admin/guidances").then((res) => {
          this.items = res.data.data;
        });
      } catch (e) {
        console.log(e);
      }
    },
    editData(data) {
      console.log(data);
    },
    deleteData(index, data) {
      http.delete(`admin/guidances/${data.item.id}`).then(() => {
        this.items.splice(index, 1);
        console.log(data);
      });
    },
    addItem() {
      http.post("admin/guidances", this.form).then((response) => {
        this.items.push(response.data.data);
        this.form = {};
        this.$bvModal.hide("modal-prevent-closing");
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style></style>
