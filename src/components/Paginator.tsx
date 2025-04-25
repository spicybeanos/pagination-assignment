import { APIEvent } from "@/types/Event";
import { useEffect, useState } from "react";


export default function Paginator({ posts }: { posts: APIEvent[] }) {

    const [displayPosts, setPosts] = useState([] as APIEvent[]);
    const itemsPerPage = 12;
    const lastPage = Math.ceil(posts.length / itemsPerPage)
    const [page, setPage] = useState(0);

    useEffect(() => {
        let toBeDisplayed = [];
        for (let index = page * itemsPerPage; index < posts.length && index < itemsPerPage * (page + 1); index++) {
            const element = posts[index];
            toBeDisplayed.push(element)
        }
        setPosts(toBeDisplayed);
    }, [posts, page])

    return (
        <>
            <div className="shadow-xl/30 bg-white flex flex-col justify-center flex-center items-center rounded-lg p-[16px] w-[1280px]">
                <div className="text-4xl mt-[82px] mb-10">Events</div>
                <div className="text-lg text-gray-500 mb-10">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.</div>
                <div className="flex flex-row flex-wrap justify-center gap-[16px] ">
                    {
                        displayPosts.map((eve, index) => (

                            <div
                                key={index}
                                className="w-[328] bg-[#E7E7E7] aspect-ratio-[0.7337] flex flex-col rounded-lg p-[24px]"
                            >
                                <img className="aspect-ratio-[1.4893] w-[280] rounded-lg" src='/event.jpg' />
                                <h3>{eve.eventName}</h3>
                                <div className="text-sm">Please add your content here. Keep it short and simple. And smile 😄 </div>
                                <div className="flex flex-row">
                                    <div className="p-[8px] aspect-ratio-[1] rounded-full bg-red-700 m-2"></div>
                                    <div>Location: {eve.location}</div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="p-[8px] aspect-ratio-[1] rounded-full bg-black m-2"></div>
                                    <div>Date: {new Date(eve.date).getFullYear()}-{new Date(eve.date).getMonth()}-{new Date(eve.date).getDate()}</div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="p-[8px] aspect-ratio-[1] rounded-full bg-yellow-400 m-2"></div>
                                    <div>organizer: {eve.organizer}</div>
                                </div>
                            </div>

                        ))
                    }
                </div>

                <div className="flex flex-row">
                    <button onClick={() => setPage(Math.max(page - 1, 0))} className="cursor-pointer rounded-lg"><img src='/left.svg' /></button>
                    {
                        page <= 3 &&
                        <div className="p-3 flex flex-row">
                            <button onClick={() => { setPage(0) }} className={(page != 0 ? "text-[#E82677] " : "bg-[#E82677] text-white shadow-xl/30 ") + "cursor-pointer text-2xl rounded-full px-[9px] m-1"}>1</button>
                            <button onClick={() => { setPage(1) }} className={(page != 1 ? "text-[#E82677] " : "bg-[#E82677] text-white shadow-xl/30 ") + "cursor-pointer text-2xl rounded-full px-[9px] m-1"}>2</button>
                            <button onClick={() => { setPage(2) }} className={(page != 2 ? "text-[#E82677] " : "bg-[#E82677] text-white shadow-xl/30 ") + "cursor-pointer text-2xl rounded-full px-[9px] m-1"}>3</button>
                            <button onClick={() => { setPage(3) }} className={(page != 3 ? "text-[#E82677] " : "bg-[#E82677] text-white shadow-xl/30 ") + "cursor-pointer text-2xl rounded-full px-[9px] m-1"}>4</button>
                            <button onClick={() => { setPage(4) }} className={(page != 4 ? "text-[#E82677] " : "bg-[#E82677] text-white shadow-xl/30 ") + "cursor-pointer text-2xl rounded-full px-[9px] m-1"}>5</button>
                            <div className="text-[#E82677] ">...</div>
                            <button onClick={() => { setPage(lastPage - 1) }} className="text-[#E82677] cursor-pointer text-2xl rounded-full px-[9px] m-1">{Math.ceil(posts.length / itemsPerPage)}</button>
                        </div>
                    }
                    {
                        page > 3 && page <= lastPage - 3 &&
                        <div className="p-3 flex flex-row">
                            <button className="text-[#E82677] cursor-pointer text-2xl rounded-full px-[9px] m-1">1</button>
                            <div className="text-[#E82677] ">...</div>
                            <button onClick={() => { setPage(page - 1) }} className="text-[#E82677] cursor-pointer text-2xl rounded-full px-[9px] m-1">{page}</button>
                            <button onClick={() => { setPage(page) }} className="bg-[#E82677] text-white shadow-xl/30 cursor-pointer text-2xl rounded-full px-[9px] m-1">{page + 1}</button>
                            <button onClick={() => { setPage(page + 1) }} className="text-[#E82677] cursor-pointer text-2xl rounded-full px-[9px] m-1">{page + 2}</button>
                            <div className="text-[#E82677] ">...</div>
                            <button className="text-[#E82677] cursor-pointer text-2xl rounded-full px-[9px] m-1">{lastPage}</button>
                        </div>
                    }

                    {
                        page > lastPage - 3 &&
                        <div className="p-3 flex flex-row">
                            <button onClick={() => { setPage(0) }} className="text-[#E82677] cursor-pointer text-2xl rounded-full px-[9px] m-1">1</button>
                            <div className="text-[#E82677] ">...</div>
                            <button onClick={() => { setPage(lastPage - 5) }} className={(page != lastPage - 5 ? "text-[#E82677] " : "bg-[#E82677] text-white shadow-xl/30 ") + "cursor-pointer text-2xl rounded-full px-[9px] m-1"}>{lastPage - 4}</button>
                            <button onClick={() => { setPage(lastPage - 4) }} className={(page != lastPage - 4 ? "text-[#E82677] " : "bg-[#E82677] text-white shadow-xl/30 ") + "cursor-pointer text-2xl rounded-full px-[9px] m-1"}>{lastPage - 3}</button>
                            <button onClick={() => { setPage(lastPage - 3) }} className={(page != lastPage - 3 ? "text-[#E82677] " : "bg-[#E82677] text-white shadow-xl/30 ") + "cursor-pointer text-2xl rounded-full px-[9px] m-1"}>{lastPage - 2}</button>
                            <button onClick={() => { setPage(lastPage - 2) }} className={(page != lastPage - 2 ? "text-[#E82677] " : "bg-[#E82677] text-white shadow-xl/30 ") + "cursor-pointer text-2xl rounded-full px-[9px] m-1"}>{lastPage - 1}</button>
                            <button onClick={() => { setPage(lastPage - 1) }} className={(page != lastPage - 1 ? "text-[#E82677] " : "bg-[#E82677] text-white shadow-xl/30 ") + "cursor-pointer text-2xl rounded-full px-[9px] m-1"}>{lastPage}</button>
                        </div>
                    }

                    <button onClick={() => setPage(Math.min(page + 1, lastPage - 1))} className="cursor-pointer border-[#E82677] rounded-lg"><img src='/right.svg' /></button>
                </div>


            </div>

        </>
    );
}

//bg-[#E82677] text-white shadow-xl/30