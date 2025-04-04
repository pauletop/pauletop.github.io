"use client";

const StickMenu = ({ width }) => {
  if (!width) {
    width = "80%";
  }
  return (
    <div className="container mx-auto" style={{ width: width }}>
      <div className={`flex justify-center items-center my-2 relative h-[5px]`}>
        <img
          src="/assets/style/stick-menu.png"
          alt=""
          className="w-full h-full mix-blend-light"
        />
        {/* <Image
          src="/assets/style/stick-menu.png"
          quality={100}
          alt=""
          fill
          className="object-fill relative"
        /> */}
      </div>
    </div>
  );
};

export default StickMenu;
