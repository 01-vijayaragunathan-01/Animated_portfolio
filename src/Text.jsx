<div style={{ width: 308, height: 308 }}>
                        <Stack
                            randomRotation={true}
                            sensitivity={180}
                            sendToBackOnClick={true}
                            cards={images.map((src, i) => (
                                /* 1. Wrap the image in a relative container */
                                <div key={i} className="relative w-full h-full group">
                                    <img
                                        src={src}
                                        alt={`card-${i + 1}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        className="rounded-xl" // Optional: adds a nice curve to the cards
                                    />


                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation(); // Prevents clicking the button from triggering the stack 'sendToBack'
                                                console.log(`Clicked card ${i + 1}`);
                                            }}
                                            className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-lg 
                       opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            ))}
                        />
                    </div>