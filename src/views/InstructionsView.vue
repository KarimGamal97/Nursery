<template>
  <div>
    <nav-bar></nav-bar>
    <v-container>
      <img class="instructions-img" src="../assets/instructions.jpg" />
    </v-container>
    <v-container>
      <h2 class="contact-head">
        يرجي الالتزام بقوانين اللائحة للحفاظ علي طفلك :
      </h2>
      <ul style="list-style-type: decimal">
        <li>يلزم عدم احضار الطفل في حالة مرضه</li>
        <li>لا يسمح بترك الطفل في الحضانة بعد الساعة 3</li>
        <li>يلزم دفع المصروفات مقدما و بأقصي موعد يوم 3 أول الشهر</li>
        <li>ممنوع احضار الشيبسي و البيبسي و البوزو و اللبان مع الوجبات</li>
        <li>
          ممنوع احضار العملات المعدنية و الأدوات الحادة والألعاب الخاصة بالطفل
        </li>
        <li>برجاء عدم احضار الاطعمة المطبوخة و اللحوم حتي لاتفسد</li>
        <li>برجاء عدم تعطيل فريق العمل المخصص لطفلك سواء بالاتصال او الحديث</li>
        <li>لا يتم خصم قيمة أيام الغياب من المصروفات</li>
        <li>يلزم اخبار الحضانة في حالة غياب الطفل لمدة طويلة</li>
        <li>
          يتم اضافة زيادة سنوية بنسبة لاتتجاوز 5% فقط لا غير و يتم تطبيقها بداية
          كل عام دراسي
        </li>
        <li>في حالة تجاوز الطفل للأداب يتم فصله من الحصانة</li>
        <li>أي أجازة رسمية هي أجازة للحضانة مدفوعة الأجر</li>
        <li>
          برجاء عد ارتداء الاطفال للمشغولات الذهبية و الحضانة غير مسئولة عن
          فقدانها
        </li>
      </ul>
    </v-container>
    <footer-comp></footer-comp>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterComp from "@/components/FooterComp.vue";
export default {
  name: "InstructionsView",
  components: {
    NavBar,
    FooterComp,
  },
};
</script>

<style scoped>
.instructions-img {
  max-width: 60%;
  min-height: 50%;
  margin: auto;
  display: block;
}

.contact-head {
  color: #2980b9;
  font-size: 33px;
  font-weight: bold;
  margin-bottom: 15px;
}
ul li {
  color: #333;
  font-size: 18px;
  font-weight: 500;
}
</style>
