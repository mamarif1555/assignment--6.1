const loadFirst = async (allSearch) =>{

document.getElementById('load-container').style.display = "block";

     const res = await fetch(` https://openapi.programming-hero.com/api/retro-forum/posts?category=${allSearch}`);
     const data =await res.json();
     const last = data.posts;
    displaylast(last);
}
const displaylast = last =>{
  const mainContainer = document.getElementById('main-container')
  mainContainer.textContent = '';

    last.forEach(main =>{{
      document.getElementById('load-container').style.display = "none";
          // console.log(last);
          const mainCard = document.createElement('div');
          mainCard.classList = `second mb-2 card bg-[#F1F2FF] shadow-xl`;
          mainCard.innerHTML = `<div class="card-body ">
          <div class="lg:flex gap-[24px] mx-auto container">
            <div class="avatar online ${main.isActive} w-[72px] h-[72px]">
             <div class="w-[72px] h-[72px] rounded-3xl">
              <img src="${main.image}" />
             </div>
            </div>
            <div class="mx-auto container">
              <nav class="">
                <span class="text-[14px] text-[#3E3F57] font-medium leading-4 text-left">${main.category}</span>
                <span class="ml-3 text-[14px] text-[#3E3F57] font-medium leading-4 text-left">${main.author.name}</span>
                <h2 class="mt-3 text-[20px] text-[#12132D] font-bold leading-7" text-left>${main.title} </h2>
                <p class="mt-4 text-[16px] text-[#6E6E83] font-normal leading-6 text-left" >${main.description
                }</p>
              </nav>
              <hr class="text-[#4f4ff5] h-[2px] mt-5 lg:w-[590px] w-[340px] text-center mx-auto">
             <div class="flex justify-between mx-auto container">
                <nav class="mt-6 flex w-[300px] gap-4">
                  <div>
                    <i class="fa-regular fa-message"></i>
                    <span>${main.comment_count
                    }</span>
                   </div>
                  <div>
                    <i class="fa-regular fa-clock"></i>
                    <span>${main.view_count}</span>
                  </div>
                  <div>
                    <i class="fa-regular fa-eye"></i>
                    <span>${main.posted_time}</span>
                  </div>
                </nav>
                <div class="mt-4">
                  <button class="btn btn-circle btn-success">
                    <span class="text-[#FFFF] h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" ><i class="fa-regular fa-envelope-open"></i></span>
                  </button>
                </div>
             </div>
            </div>
          </div>
        </div>
        `;
       mainContainer.appendChild(mainCard);

      }})


}
loadFirst();


const optionSearch = () =>{
 const searchContainer = document.getElementById('search-container');
 const allSearch = searchContainer.value;
 console.log(allSearch);
 loadFirst(allSearch);
}




















const firstTime = async () =>{
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
  const data =await res.json();
  console.log(data)
  const last = data;
  lastTime(last);
}

const lastTime = last =>{
  const latestContainer = document.getElementById('latest-container')
    last.forEach(first =>{{
          console.log(last);
          const mainCard = document.createElement('div');
          mainCard.classList = `mx-auto container grid lg:grid-cols-3 gap-4 mt-12`;
          mainCard.innerHTML = ` <div>
          <div class="mx-auto container card w-[374px] h-[482px] bg-[#FFFFFF] shadow-xl">
            <div class="mx-auto container card-body w-[326px] h-[190px] bg-[#F3F3F4] text-center m-6">
            <img src="${first.cover_image}" alt="">
            </div>
            <div class=" container card-body1 w-[321px] h-[220px] bg-white text-center mb-6 mx-auto">
              <div class="mt-0 flex gap-3">
                <span class="w-4 h-4 text-[#717181]"><i class="fa-regular fa-calendar-minus"></i></span>
                <span class="mt-1 text-[16px] font-normal leading-5 text-[#717181]">${first.author.posted_date}</span>
              </div>
              <div>
                <h1 class="mt-[15px] text-[18px] font-extrabold leading-8 text-[#12132D] text-left">${first.title}</h1>
                <p class="mt-3 text-[16px] font-normal leading-6 text-[#717181] text-left">${first.description}</p>
              </div>
              <div class="flex gap-4">
                <img class="rounded-full bg-black w-[44px] h-[44px]" src="${first.profile_image}" alt="">
                <nav class=" text-left">
                  <h4 class="mt-[6px] text-[16px] font-bold leading-5 text-[#12132D]">Cameron Williamson</h4>
                  <p class="mt-[4px] text-[14px] font-normal leading-[18px] text-[#717181]">unknown</p>
                </nav>
              </div>
            </div>
        
          `;


          latestContainer.appendChild(mainCard);
    }})
    }

firstTime()


const loadFirst1 = async () =>{
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
  const data =await res.json();
  const last = data.posts;
 displaylast1(last);
}
const displaylast1 = last =>{
const mainContainer = document.getElementById('main-container')
mainContainer.textContent = '';

 last.forEach(main =>{{
       console.log(last);
       const mainCard = document.createElement('div');
       mainCard.classList = `second mb-2 card bg-[#F1F2FF] shadow-xl`;
       mainCard.innerHTML = `<div class="card-body ">
       <div class="lg:flex gap-[24px] mx-auto container">
         <div class="avatar online ${main.isActive} w-[72px] h-[72px]">
          <div class="w-[72px] h-[72px] rounded-3xl">
           <img src="${main.image}" />
          </div>
         </div>
         <div class="mx-auto container">
           <nav class="">
             <span class="text-[14px] text-[#3E3F57] font-medium leading-4 text-left">${main.category}</span>
             <span class="ml-3 text-[14px] text-[#3E3F57] font-medium leading-4 text-left">${main.author.name}</span>
             <h2 class="mt-3 text-[20px] text-[#12132D] font-bold leading-7" text-left>${main.title} </h2>
             <p class="mt-4 text-[16px] text-[#6E6E83] font-normal leading-6 text-left" >${main.description
             }</p>
           </nav>
           <hr class="text-[#4f4ff5] h-[2px] mt-5 lg:w-[590px] w-[340px] text-center mx-auto">
          <div class="flex justify-between mx-auto container">
             <nav class="mt-6 flex w-[300px] gap-4">
               <div>
                 <i class="fa-regular fa-message"></i>
                 <span>${main.comment_count
                 }</span>
                </div>
               <div>
                 <i class="fa-regular fa-clock"></i>
                 <span>${main.view_count}</span>
               </div>
               <div>
                 <i class="fa-regular fa-eye"></i>
                 <span>${main.posted_time}</span>
               </div>
             </nav>
             <div class="mt-4">
               <button class="btn btn-circle btn-success">
                 <span class="text-[#FFFF] h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" ><i class="fa-regular fa-envelope-open"></i></span>
               </button>
             </div>
          </div>
         </div>
       </div>
     </div>
     `;
    mainContainer.appendChild(mainCard);

   }})

}
loadFirst1();













const loadNews = async() =>{
  const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
  const data = await res.json();
  data.posts.forEach((info) => {
    console.log(info)
  })

}

loadNews();
