import { cn } from "@/lib/utils";
const Footer = ({ white, className }) => {
  const color = `${white ? "text-white" : "text-prim"}/80`;
  return (
    <section className={cn(color, className)}>
      <footer className="text-center lg:text-left font-caps py-1 lg:mt-8 cursor-default select-none container">
        <p className="text-sm">
          <span className="text-xl">&copy;</span> 2025 Paul. All rights reserved
          <span className="text-accent/90 text-xl"> | </span>
          <span className="text-red/80 font-script">
            Referenced @cristianmihai01&nbsp;
            <span className="text-accent-hover/60">Luke</span> design
          </span>
        </p>
      </footer>
    </section>
  );
};

export default Footer;
