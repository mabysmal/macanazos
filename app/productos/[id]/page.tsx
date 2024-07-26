import HamburgerMenu from "@/components/hamburger-menu";
import { readContent, readMatterData } from "@/utilities/fileReading";
import ProductCarousel from "@/components/productCarrousel";
import FooterMacanazos from "@/components/footerMacanazos";
import ReactMarkdown from "react-markdown";
import './styles.css'
import { Montserrat } from "next/font/google";



export default function ProductPage({params}: {params: {id: string}}) {
//data= las cajitas con info que escribe papa en la pagina admin
//content= el texto largo que escribe papa con formato markdown

    const productData= readMatterData(params.id+'.mdx');
    const productContent = readContent(params.id+'.mdx');

    let productImages = [
        productData.thumbnail,
        productData.Imagen2,
        productData.Imagen3,
        productData.Imagen4,
        productData.Imagen5,
        productData.Imagen6,
        productData.Imagen7,
    ].filter(image => image !== undefined); // filtra los valores undefined

    return(
        <main>
            <HamburgerMenu />

            
            <div id="contenedor de producto" className=" pt-16 pb-8 bg-blue flex flex-col md:flex-row md:justify-center md:items-start">
                <div id="contenedor de imagenes" className="flex-col w-full md:w-2/5">
                    <ProductCarousel images={productImages} />
                </div>
                <div id="contenedor de texto" className="w-full md:w-2/5">
                    <h1 className="text-5xl pt-5 px-5 text-center md:text-left">{productData.title}</h1>
                    <ReactMarkdown className="markdown-body" >{productData.description}</ReactMarkdown>
                    <p className="texto-body">Medidas del producto:   {productData.medidas}***</p>
                    <p className="texto-body">Tiempo de entrega estimado:   {productData.esttime}, dependiendo de la cantidad de unidades del pedido.</p>
                    <p className="texto-precio"> {productData.price}.00 MXN*</p>
                    {/* <OptionsDetails product={productData} /> */}
                    <div className="flex flex-row justify-center text-2xl w-full ">
                      <a href={`https://wa.me/+528110596823?text=${encodeURIComponent(`Hola, soy [Escriba su nombre completo aquí] y me interesa "${productData.title}" para [Escriba el número de personas a caricaturizar] personas. El nombre de la escuela/empresa/institución es: [Escriba el nombre aquí]. La fecha estimada del evento/graduación es [Escriba la fecha aquí].`)}`} target="_blank" rel="noopener noreferrer" className="inline-block px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                        <button id="Contact-Whatsapp" className="text-4xl bg-green pt-2 px-5 rounded-xl"> Contactar por Whatsapp</button>
                      </a>
                    </div>
                    <div className="flex flex-row justify-center text-2xl w-full mt-4">
                      <a href={`mailto:castillo.memo@gmail.com?subject=${encodeURIComponent(`Me interesa este producto "${productData.title}"`)}&body=${encodeURIComponent(`Hola, soy [Escriba su nombre completo aquí] y me interesa "${productData.title}" para [Escriba el número de personas a caricaturizar] personas. El nombre de la escuela/empresa/institución es: [Escriba el nombre aquí]. La fecha estimada del evento/graduación es [Escriba la fecha aquí]. 

                      ¿Me podría dar más información del producto?, ¿Tiene alguna promoción vigente?`)}`}>
                        <button id="Contact-Email" className="text-4xl bg-orange pt-2 px-5 rounded-xl"> Contactar por Email</button>
                      </a>
                    </div>

                </div>

                
            </div>

            <div className="asteriscos pb-8 flex-wrap bg-blue flex w-full flex-center justify-center">
              <span className="text-center text-light-blue">* El precio es por unidad individual a menos que se deje en claro en la descripción que el precio es determinado por grupos de unidades.</span>
              <span className="text-center text-light-blue ">** Se debe pagar un adelanto del 50% del precio total del pedido y mandar el material necesario para las caricaturas para iniciar su producción. El restante 50% se paga contra entrega.</span>
              <span className="text-center text-light-blue ">*** Las medidas fueron tomadas manualmente. Las medidas pueden variar de 1-2 cm</span>

            </div>

            <FooterMacanazos></FooterMacanazos>
        </main>
    );
}