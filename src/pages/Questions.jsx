import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
function Questions() {
  const data = {
    rows: [
      {
        title: " Quru və susuz dəri arasındakı fərq nədir?",
        content: `
Quru dəri bir vəziyyət deyil, həssas, yağlı, həssas və ya qarışıq dəri kimi bir dəri növüdür. Susuzlaşdırılmış dəri bir dəri vəziyyətidir, yəni hər hansı bir dəri növü bu və ya digər zamanda susuzlaşa bilər. Quru dəri tipi “dərinin təbii yağlarının qeyri-adekvat istehsalına meylli olan” kimi təyin edilir.
`,
      },
      {
        title: "Dərimizi necə nəmləndirmək olar?",
        content:
          "Xoşbəxtlikdən, dərini nəmləndirmək üçün ciddi tədbirlər tələb etməyən bir sıra yollar var. Nəmləndirici kremdən və yaxşı üz nəmləndiricilərindən tutmuş zərərli maddələri kəsməyə və daha çox su içməyə qədər, bunlar ən təsirli dərini nəmləndirmə üsullarıdır.",
      },
      {
        title: "Məhsullar dəriyə uyğunluq baxımından sınaqdan keçirilirmi?",
        content: `Bütün düsturlar dəriyə uyğunluğu üçün dermatoloji cəhətdən sınaqdan keçirilir. `,
      },
      {
        title: "Həssas dəriyə qulluq zamanı xüsusilə nə vacibdir?",
        content: `
Həssas dəri irsi və ya qazanılmış ola bilər. Həssas dəri müəyyən məhsullara və ətraf mühitin təsirlərinə reaksiya verə bilər. `,
      },
      {
        title:
          "Boyalı saçlar üçün rəng qoruyucu şampundan istifadə etmək lazımdırmı?",
        content: `
        Rəngi ​​qoruyan şampundan istifadə etmək həmişə daha yaxşıdır, çünki o, rəngi saxlayır və adi təmizləyici şampundan fərqli olaraq rəngi daha uzun saxlayır.
`,
      },
      {
        title: "Quru və qıvrım saçlar üçün ən yaxşı vasitə hansıdır?",
        content: `
        
Quru və qıvrım saçlar üçün yaxşı saç maskasına keçin və kondisionerdən istifadə edin.
`,
      },
      {
        title: "Tuş nə qədər tez-tez dəyişdirilməlidir?",
        content: `
       Tuş hər 3 aydan bir dəyişdirilməlidir, çünki bu müddətdən sonra qabın içərisində bakteriyalar çoxalmağa başlaya bilər.
`,
      },
      {
        title: "Dəriyə qulluq rutininin ən vacib hissələri hansılardır?",
        content: `
       Təmizləmə, tonlama və nəmləndirici dəriyə qulluq rejiminə riayət etməklə yanaşı, dərinizi günəşin zərərli şüalarından da qorumalısınız.
`,
      },
      {
        title:
          "Makiyajımı etmək üçün 5 dəqiqə vaxtım var. Mən nə edə bilərəm ki, ən çox fərq yarada bilər?",
        content: `
        
Makiyaj etmək üçün cəmi 5 dəqiqəniz varsa, diqqətinizi bir sahəyə yönəldin. Pomada üzü kəskin şəkildə dəyişə bilər və ya gözləri qaraltmaq üçün daha çox tuş əlavə edə bilər.
`,
      },
      {
        title: "Makiyajımla günəş kremini necə tətbiq edə bilərəm? ",
        content: `
        Mən günəş kremi sürdüyüm zaman onu həmişə təzə təmizlənmiş və nəmlənmiş üzə çəkirəm və hər hansı bir makiyaj tətbiq etməzdən əvvəl məhsulun dəriyə oturmasına icazə verirəm.
`,
      },
      {
        title: "Həftədə neçə dəfə maska ​​etmək məsləhətdir?",
        content: `
       Yağlı və ya normal dəriniz varsa həftədə 2-3 dəfə maskadan istifadə edə bilərsiniz.
`,
      },
      {
        title: "Makyaj fırçalarını necə təmizləyirsiniz?",
        content: `
       Makyaj fırçalarınız, hər 4-8 həftədən bir təmizlədiyiniz müddətcə illərlə davam edə bilər.
`,
      },
      {
        title: "BB krem nədir?",
        content: `
       BB "gözəllik balzamı" mənasını verir və ləkələri müalicə etmək və örtmək, dəri tonunu hamarlamaq və dərini nəmləndirmək üçün bir müalicədir.
`,
      },
      {
        title: "Qaşlarınızı necə formalaşdırırsınız?",
        content: `
      Onları fırçalayın və gözlərinizdən uzaqlaşdırın. 
`,
      },
      {
        title: " Çillər nədir?",
        content: `Onlar üzünüzdə və bədəninizdə görünən kiçik və dairəvi tünd ləkələrdir (adətən açıq-qəhvəyi rəngdədir).
`,
      },
    ],
  };
  return (
    <section>
      <div className="k">
        <h1>Suallar</h1>
      </div>
      <div className="container">
          <div>
            <Faq data={data} />
          </div>
      </div>
    </section>
  );
}
export default Questions;
