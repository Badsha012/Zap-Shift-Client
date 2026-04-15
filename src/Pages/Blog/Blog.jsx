import React from 'react';
import { ArrowRight, Calendar, User } from 'lucide-react';

const blogs = [
    {
        id: 1,
        title: "Fastest Delivery Routes in Dhaka",
        description: `ঢাকা শহরের ব্যস্ত রাস্তায় দ্রুততম সময়ে পার্সেল পৌঁছানো একটি বড় চ্যালেঞ্জ। Zap Shift এই চ্যালেঞ্জ মোকাবিলায় উন্নত AI-driven Route Optimization প্রযুক্তি ব্যবহার করে। আমাদের সিস্টেম যানজট এবং আবহাওয়ার ডাটা বিশ্লেষণ করে সবচেয়ে ছোট রাস্তাটি বেছে নেয়।`,
        image: "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?q=80&w=1974&auto=format&fit=crop",
        date: "14 April, 2026",
        author: "Badsha Sheikh"
    },
    {
        id: 2,
        title: "Safe Packaging for Fragile Items",
        description: `কাঁচের পণ্য এবং ইলেকট্রনিক্স নিরাপদে পরিবহনের জন্য বাবল র‍্যাপ এবং নিউজপ্রিন্ট কাগজ ব্যবহার করুন। বক্সের নিচে এবং দুই পাশে কুশন দিন যাতে ভেতরে ফাঁকা না থাকে। বক্সের গায়ে অবশ্যই "FRAGILE" লিখে দিন।`,
        image: "https://i.ibb.co.com/mrzy3QS1/images-36.jpg",
        date: "12 April, 2026",
        author: "Admin"
    },
    {
        id: 3,
        title: "Tracking Your Parcel Real-time",
        description: `Zap Shift-এর লাইভ ট্র্যাকিং ফিচারের মাধ্যমে আপনি আপনার অর্ডারের বর্তমান অবস্থান ম্যাপে সরাসরি দেখতে পাবেন। পার্সেল পিক-আপ থেকে গন্তব্যে পৌঁছানো পর্যন্ত প্রতিটি ধাপ আপনার ডিভাইসে আপডেট হবে।`,
        image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=2070&auto=format&fit=crop",
        date: "10 April, 2026",
        author: "Tech Team"
    }
];

const Blog = () => {
    return (
        <div className="py-20 bg-base-200 min-h-screen">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-green-500 mb-2 underline decoration-wavy decoration-green-200">Our Latest News</h2>
                    <p className="opacity-70">Stay updated with logistics tips and company updates</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="card bg-base-100 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-base-300">
                            <figure className="h-52 overflow-hidden">
                                <img 
                                    src={blog.image} 
                                    alt={blog.title} 
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                                />
                            </figure>
                            <div className="card-body">
                                <div className="flex items-center gap-4 text-xs opacity-60 mb-2">
                                    <span className="flex items-center gap-1 font-medium text-green-600">
                                        <Calendar size={14} /> {blog.date}
                                    </span>
                                    <span className="flex items-center gap-1 font-medium">
                                        <User size={14} /> {blog.author}
                                    </span>
                                </div>
                                <h2 className="card-title text-xl font-bold leading-tight hover:text-green-500 cursor-pointer">
                                    {blog.title}
                                </h2>
                                <p className="text-sm opacity-75 mt-2 leading-relaxed">
                                    {blog.description}
                                </p>
                                <div className="card-actions mt-6">
                                    <button className="btn btn-ghost p-0 min-h-0 h-auto text-green-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                        Read More <ArrowRight size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;