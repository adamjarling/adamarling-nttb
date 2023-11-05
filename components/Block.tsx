import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Props {
  altText?: string;
  bgImgSrc?: string;
  href: string;
  label?: string;
}

export default function SquareBlock({
  altText = "",
  bgImgSrc = "",
  href,
  label,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      whileInView={{ opacity: 0.9 }}
      className="relative flex items-center justify-center h-full overflow-hidden aspect-w-1 aspect-h-1"
    >
      <Link href={href}>
        <Image src={bgImgSrc} alt={altText} fill className="z-0 object-cover" />

        <div className="absolute z-10 -bottom-1 right-5">
          {label && (
            <motion.h2
              className="mb-4 text-2xl font-semibold text-white"
              style={{ textShadow: "2px 2px #000" }}
            >
              {label}
            </motion.h2>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
