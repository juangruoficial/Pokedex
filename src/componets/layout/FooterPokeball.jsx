const FooterPokeball = () => {
  return (
    <section>
      <div className="h-16 bg-red-600"></div>
      <div className="h-12 bg-black relative">
        <div
          className="h-16 bg-white aspect-square rounded-full absolute left-1/2 
        -translate-x-1/2 -top-6 border-[10px] border-black after:block 
        after:content-[''] after:h-8 after:aspect-square after:rounded-full
         after:bg-slate-800 after:left-1/2 after:absolute after:-translate-x-1/2
         after:top-1/2 after:-translate-y-1/2 after:border-[4px] after:border-black"
        ></div>
      </div>
    </section>
  );
};
export default FooterPokeball;
