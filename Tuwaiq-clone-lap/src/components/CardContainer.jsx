import React from 'react'
import CardComponent from './CardComponent'
import ShowMoreBtn from './ShowMoreBtn'
function CardContainer(props) {
  return (
    <>
    <div className='card-container'>
        <CardComponent type="برنامج" cardTitle="تهيئة الإنتاجية بإستخدام Red Hat OpenShift II" city="الرياض" duration="أسبوع واحد" date="يبدأ في 26-11-2023"></CardComponent>
        <CardComponent type="برنامج" cardTitle="بناء واجهة برمجة تطبيقات REST باستخدام Python و Django" city="عن بعد" duration="5 أسابيع" date="يبدأ في 03-12-2023"></CardComponent>
        <CardComponent type="برنامج" cardTitle="إدارة خدمات تقنية المعلومات (ITIL)" city="الرياض" duration="أسبوع واحد" date="يبدأ في 10-12-2023"></CardComponent>
        <CardComponent type="برنامج" cardTitle="تطبيقات إنترنت الأشياء للمدن الذكية" city="الرياض" duration="أسبوعان" date="يبدأ في 10-12-2023"></CardComponent>
        <CardComponent type="معسكر" cardTitle="
تصميم تجربة وواجهات المستخدم" city="الرياض" duration="10 أسابيع" date="يبدأ في 31-12-2023"></CardComponent>
         <CardComponent type="برنامج" cardTitle="PL-900: أساسيات منصة Microsoft Power Platform" city="الرياض" duration="أسبوع واحد" date="يبدأ في 10-8-2023" closed={true}></CardComponent>
         
    </div>
    
    </>
  )
}

export default CardContainer