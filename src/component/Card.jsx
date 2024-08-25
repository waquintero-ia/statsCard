const Card = () => {
  return(
    <>
      <section className="card">
        <div className="card_container w-327 min-h-780 rounded-[8px] bg-black-2 overflow-hidden xl:w-1110 xl:min-h-446 xl:flex xl:flex-row-reverse xl:gap-[30px]">
          <figure className="relative xl:w-540">
            <div className="absolute w-full h-full inset-0 bg-purple opacity-100 mix-blend-multiply"></div>
            <img className="w-full h-full object-fill" src="./images/image-header-mobile.jpg" alt="woman working happiness in their office" loading="lazy" decoding="async"/>
            <figcaption className="sr-only">
              Figure 1: employees enjoying the good work environment in the office
            </figcaption>
          </figure>
          <div className="card_content pt-10 pb-8 px-[31.5px] flex flex-col gap-10 xl:w-540 xl:pt-[71px] xl:pl-[72px] xl:pb-[59px] xl:pr-[95px] xl:gap-[72px]">
            <div className="content_title flex flex-col gap-4 justify-center items-center text-center w-full xl:text-start xl:items-start xl:gap-[25px]">
              <h1 className="title text-white text-28 leading-32 font-bold xl:text-36 xl:leading-44">
                Get <span className="text-purple">insights</span> that help your business grow.
              </h1>
              <p className="text-15 leading-25 text-white-2">
                Discover the benefits of data analytics and make better decisions regarding revenue, customer 
                experience, and overall efficiency.
              </p>
            </div>
            <div className="content_statics flex flex-col gap-6 justify-center items-center w-full xl:flex xl:flex-row xl:justify-between xl:w-">
              <div className="statics flex flex-col gap-[2px] text-center uppercase xl:text-start">
                <span className="text-24 font-bold leading-29 text-white lowercase">
                  10k+
                </span>
                <span className="text-white-2 text-12 leading-25 tracking-[1px]">
                  companies
                </span>
              </div>
              <div className="statics flex flex-col gap-[2px] text-center uppercase xl:text-start">
                <span className="text-24 font-bold leading-29 text-white">
                  314
                </span>
                <span className="text-white-2 text-12 leading-25 tracking-[1px]">
                templates
                </span>
              </div>
              <div className="statics flex flex-col gap-[2px] text-center uppercase xl:text-start">
                <span className="text-24 font-bold leading-29 text-white">
                  12m+
                </span>
                <span className="text-white-2 text-12 leading-25 tracking-[1px]">
                  queries
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Card