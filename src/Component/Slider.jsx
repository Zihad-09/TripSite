import React, { useState, useEffect } from "react";

export default function RotatingText() {
  const texts = [
    "Doloremque exercitationem quo assumenda quaerat accusantium nihil sequi expedita, magnam mollitia reprehenderit beatae illum fuga ipsa harum tenetur numquam at laborum voluptatibus dolores cumque iste quos amet nam repellendus porro adipisci. Provident alias magnam reprehenderit cum recusandae doloribus quasi molestias totam iste placeat illum odio!",
    "Consequuntur tempore laborum cumque eligendi optio sint molestiae repellat eius ad quod labore impedit ab, tenetur illum accusantium numquam deleniti debitis id quaerat voluptatum, necessitatibus earum dignissimos ipsa eaque doloremque dolorum. Nihil possimus recusandae beatae eaque necessitatibus, accusamus officiis dolore impedit harum, similique fugiat magni!",
    "Recusandae sit, suscipit voluptatum placeat velit ducimus cupiditate, itaque sequi numquam maiores obcaecati quam nemo aliquam odio ipsa beatae illum perspiciatis optio id officiis veniam. Tempore eaque eveniet illo quas, delectus commodi illum distinctio pariatur amet cumque quam culpa vero exercitationem repudiandae, esse in dolorem!"
  ];
  const titel =[
   "PASSION FOR TRAVEL",
   "QUALITY",
   "CUSTOMER SERVICE",  
  ]

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 2500); 
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-22 bg-[#eff8f7]">
        <div className="text-2xl text-gray-600 px-5 lg:px-99 fade-animation">
          <p className="flex text-4xl font-bold mb-2 justify-center">{titel[index]}</p>
      <p>{texts[index]}</p>
    </div>
    </div>
  );
}
