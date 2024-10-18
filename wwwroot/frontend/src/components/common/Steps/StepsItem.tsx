export default function StepsItem({
    imageUrl,
    text,
}: {
    imageUrl: string;  // Image URL of the step item. This is a placeholder. Replace it with actual image URLs.  // eslint-disable-line react/prop-types
    text: string; // Text of the step item. This is a placeholder
}) {
    return(
        <div className="flex flex-col items-center gap-5">
            <div className="w-[230px] h-[200px] window overflow-hidden flex-wrap:wrap hover:cursor-pointer hover:bg-gray-800">
                <img src={imageUrl} className="p-2" alt="upload files" />
            </div>
            <h1 className='text-white-clr font-bold text-sm'>{text}</h1>
        </div>
    );
}