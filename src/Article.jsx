// import React from "react";
// import { useLocation } from "react-router-dom";

// const Article = () => {
//   const location = useLocation();
//   const { imageurl, content, title, publishedAt } = location.state;
//   // console.log(imageurl);

//   return (
//     <div>
//       <div className="container my-24 px-6 mx-auto">
//         <section class="mb-32 text-gray-800">
//           <img
//             src={imageurl}
//             className="w-full shadow-lg rounded-lg mb-6"
//             alt="test"
//           />

//           <div className="flex items-center mb-6">
//             <img
//               src="https://mdbootstrap.com/img/Photos/Avatars/img (23).jpg"
//               className="rounded-full mr-2 h-8"
//               alt=""
//               loading="lazy"
//             />
//             <div>
//               <span>
//                 <u> {new Date(publishedAt).toDateString()}</u>
//               </span>
//             </div>
//           </div>

//           <h1 className="font-bold text-3xl mb-6">{title}</h1>

//           <p>{content}</p>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Article;
