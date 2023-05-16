import { Link } from "react-router-dom";


const Menu = () => {

   const posts = [
      {
        id: 1,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 2,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 3,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        id: 4,
        title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
        img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ];
  
  return (
   <div className="bg-white py-24 sm:py-32">
   <div className="mx-auto max-w-7xl px-6 lg:px-8">
     <div className="mx-auto max-w-2xl lg:mx-0">
       <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Other posts you may like</h2>
       <p className="mt-2 text-lg leading-8 text-gray-600">
         Learn how to grow your business with our expert advice.
       </p>
     </div>
     <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
       {posts.map((post) => (
         <Link key={post.id} className="flex max-w-xl flex-col items-start justify-between">
            <img src={post.img} alt="" className="h-[200px] w-full object-cover mb-5"/>
           <div className="flex items-center gap-x-4 text-xs">
             <time  className="text-gray-500">
               Mar 16, 2020
             </time>
             <span
               className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
             >
              Technology
             </span>
           </div>
           <div className="group relative">
             <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                 <span className="absolute inset-0" />
                 {post.title}     
             </h3>
             <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.desc}</p>
           </div>
           <div className="relative mt-8 flex items-center gap-x-4">
             <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="" className="h-10 w-10 rounded-full bg-gray-50" />
             <div className="text-sm leading-6">
               <p className="font-semibold text-gray-900">
                
                   <span className="absolute inset-0" />
                   Michael Foster
            
               </p>
               <p className="text-gray-600">Front-end Developer</p>
             </div>
           </div>
         </Link>
       ))}
     </div>
   </div>
 </div>
  )
}

export default Menu