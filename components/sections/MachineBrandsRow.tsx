import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import FadeIn from "@/components/ui/FadeIn";
import { MACHINE_BRANDS } from "@/content/spaces";

export default function MachineBrandsRow() {
  return (
    <div className="border-y border-gray-300 bg-sand-50 py-16">
      <Container>
        <FadeIn className="text-center">
          <Eyebrow>Maquinaria de las mejores marcas</Eyebrow>
          {MACHINE_BRANDS.length > 0 ? (
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-16 gap-y-6 text-gray-500">
              {MACHINE_BRANDS.map((brand) => (
                <span key={brand} className="text-sm font-light uppercase tracking-[0.2em]">
                  {brand}
                </span>
              ))}
            </div>
          ) : (
            <p className="mt-8 text-sm font-light text-gray-500">
              {"{{TBD: listado de marcas de la maquinaria}}"}
            </p>
          )}
        </FadeIn>
      </Container>
    </div>
  );
}
