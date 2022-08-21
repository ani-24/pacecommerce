import Image from "next/image";
import Link from "next/link";

const Wame = () => {
  return (
    <div className="fixed left-5 bottom-5 z-50 animate-moveDown">
      <Link
        href={`https://wa.me/+919334314161?text=${"Hello, I want to enquire about commerce classes.".replace(
          / /g,
          "%20"
        )}`}
      >
        <a>
          <Image
            src="/whatsapp-logo.svg"
            alt="Whatsapp us"
            height={50}
            width={50}
            priority={true}
          />
        </a>
      </Link>
    </div>
  );
};

export default Wame;
