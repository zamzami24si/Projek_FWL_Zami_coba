import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { FaCoffee, FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"

export default function ProductDetail() {
    const { id } = useParams()
    const [product, setProduct] = useState(null)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${id}`)
            .then((response) => {
                setProduct(response.data)
            })
            .catch((err) => {
                setError(err.message)
            })
    }, [id])

    if (error) return <div className="text-red-600 p-8 text-center font-bold">Error: {error}</div>
    if (!product) return <div className="p-8 text-center text-stone-400 animate-pulse">Brewing your data... ☕</div>

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <Link to="/products" className="flex items-center gap-2 text-stone-500 hover:text-[#4E342E] mb-6 transition-all">
                <FaArrowLeft /> <span>Back to Inventory</span>
            </Link>

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-stone-100 flex flex-col md:flex-row">
                {/* Image Section */}
                <div className="md:w-1/2 bg-stone-100 p-4 flex items-center justify-center">
                    <img
                        src={product.thumbnail}
                        alt={product.title}
                        className="rounded-2xl w-full h-80 object-contain hover:scale-105 transition-transform duration-500"
                    />
                </div>

                {/* Content Section */}
                <div className="md:w-1/2 p-8">
                    <div className="flex items-center gap-2 mb-2 text-[#8B4513] font-bold text-xs uppercase tracking-widest">
                        <FaCoffee /> {product.category}
                    </div>
                    <h2 className="text-3xl font-black text-[#4E342E] mb-4">{product.title}</h2>
                    
                    <div className="space-y-4 mb-8">
                        <div className="flex justify-between border-b border-stone-100 pb-2">
                            <span className="text-stone-400">Origin / Brand</span>
                            <span className="font-bold text-stone-700">{product.brand}</span>
                        </div>
                        <div className="flex justify-between border-b border-stone-100 pb-2">
                            <span className="text-stone-400">Rating</span>
                            <span className="font-bold text-yellow-600">⭐ {product.rating}</span>
                        </div>
                    </div>

                    <div className="bg-[#FCF8F5] p-4 rounded-2xl mb-6">
                        <p className="text-stone-400 text-xs mb-1 uppercase font-bold">Price per Unit</p>
                        <p className="text-3xl font-black text-[#4E342E]">
                            Rp {(product.price * 15000).toLocaleString('id-ID')}
                        </p>
                    </div>

                    <button className="w-full bg-[#4E342E] text-white py-4 rounded-2xl font-bold shadow-lg hover:bg-[#3E2723] transition-all transform active:scale-95">
                        Update Stock Item
                    </button>
                </div>
            </div>
            
            {/* Description */}
            <div className="mt-8 bg-white p-8 rounded-3xl border border-stone-100 shadow-sm">
                <h3 className="font-bold text-[#4E342E] mb-2">Item Description</h3>
                <p className="text-stone-600 leading-relaxed text-sm">
                    {product.description}. This premium selection is handled with care by our baristas to ensure the highest quality experience for Brew.Bean customers.
                </p>
            </div>
        </div>
    )
}