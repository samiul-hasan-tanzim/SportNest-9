export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-emerald-50 via-white to-emerald-100">

            <div className="flex flex-col items-center gap-6">

                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-4 border-emerald-200"></div>

                    <div className="absolute inset-0 rounded-full border-4 border-t-emerald-500 animate-spin"></div>
                </div>

                <div className="flex gap-2">
                    <span className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"></span>
                    <span className="w-3 h-3 bg-emerald-400 rounded-full animate-bounce [animation-delay:0.15s]"></span>
                    <span className="w-3 h-3 bg-emerald-300 rounded-full animate-bounce [animation-delay:0.3s]"></span>
                </div>

                <p className="text-gray-600 font-medium tracking-wide">
                    Loading facilities...
                </p>

            </div>

        </div>
    );
}