import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Battery, Droplet, Zap, Leaf, Wind, Thermometer } from "lucide-react"

export default function VaperLanding() {
  const vaperProducts = [
    {
      name: "Vaper Pro X",
      description: "El vaper más potente de nuestra línea",
      image: "/placeholder.svg?height=100&width=100",
      features: [
        { icon: Battery, text: "Batería de 3000mAh" },
        { icon: Droplet, text: "Tanque de 5ml" },
        { icon: Zap, text: "Potencia ajustable hasta 100W" },
      ],
    },
    {
      name: "Vaper Slim",
      description: "Diseño compacto para llevar a todas partes",
      image: "/placeholder.svg?height=100&width=100",
      features: [
        { icon: Battery, text: "Batería de 1500mAh" },
        { icon: Droplet, text: "Tanque de 2ml" },
        { icon: Zap, text: "Potencia fija de 15W" },
      ],
    },
    {
      name: "Vaper Cloud Master",
      description: "Para los amantes de las grandes nubes",
      image: "/placeholder.svg?height=100&width=100",
      features: [
        { icon: Battery, text: "Batería dual 18650" },
        { icon: Droplet, text: "Tanque de 8ml" },
        { icon: Zap, text: "Potencia ajustable hasta 200W" },
      ],
    },
    {
      name: "Vaper Eco Green",
      description: "La opción ecológica y sostenible",
      image: "/placeholder.svg?height=100&width=100",
      features: [
        { icon: Leaf, text: "Materiales reciclables" },
        { icon: Battery, text: "Batería de 2000mAh recargable" },
        { icon: Droplet, text: "Tanque rellenable de 3ml" },
      ],
    },
    {
      name: "Vaper Air Flow",
      description: "Control de flujo de aire preciso",
      image: "/placeholder.svg?height=100&width=100",
      features: [
        { icon: Wind, text: "Sistema de flujo de aire ajustable" },
        { icon: Battery, text: "Batería de 2500mAh" },
        { icon: Droplet, text: "Tanque de 4ml" },
      ],
    },
    {
      name: "Vaper Temp Master",
      description: "Control de temperatura avanzado",
      image: "/placeholder.svg?height=100&width=100",
      features: [
        { icon: Thermometer, text: "Control de temperatura preciso" },
        { icon: Battery, text: "Batería de 3500mAh" },
        { icon: Zap, text: "Rango de potencia 5-120W" },
      ],
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white shadow-md">
        <Link className="flex items-center justify-center" href="#">
          <Zap className="h-8 w-8 text-purple-600" aria-hidden="true" />
          <span className="ml-2 text-2xl font-bold text-gray-800">Vaper Inc</span>
        </Link>
        <nav className="ml-auto">
          <ul className="flex gap-4 sm:gap-6">
            <li>
              <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#">
                Productos
              </Link>
            </li>
            <li>
              <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#">
                Características
              </Link>
            </li>
            <li>
              <Link className="text-sm font-medium hover:text-purple-600 transition-colors" href="#">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-purple-700 via-purple-600 to-indigo-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Descubre el Mundo del Vapeo
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl/relaxed lg:text-2xl/relaxed">
                  Explora nuestra colección de vapers de alta calidad y encuentra el dispositivo perfecto para ti.
                </p>
              </div>
              <div className="space-x-4">
                <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">Ver Productos</Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
                  Más Información
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100" aria-labelledby="featured-products">
          <div className="container px-4 md:px-6">
            <h2 id="featured-products" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-800">
              Nuestros Vapers Destacados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {vaperProducts.map((product, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader className="bg-purple-600 text-white">
                    <div className="flex items-center space-x-4">
                      <div className="rounded-full bg-white p-2">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={60}
                          height={60}
                          className="rounded-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{product.name}</CardTitle>
                        <CardDescription className="text-gray-100">{product.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="mt-4">
                    <ul className="space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <feature.icon className="h-5 w-5 text-purple-600" aria-hidden="true" />
                          <span>{feature.text}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        
      </main>
      <footer className="w-full py-6 bg-gray-800 text-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Acerca de</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Nuestra Historia</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Equipo</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Carreras</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Productos</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Vapers</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">E-líquidos</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Accesorios</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Soporte</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-purple-400 transition-colors">FAQ</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Contacto</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Envíos</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Legal</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Términos de Servicio</Link></li>
                <li><Link href="#" className="hover:text-purple-400 transition-colors">Política de Privacidad</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700">
            <p className="text-center text-sm text-gray-400">© 2024 Vaper Inc. Todos los derechos reservados. Diseñado por LechugaDigital</p>
          </div>
        </div>
      </footer>
    </div>
  )
}