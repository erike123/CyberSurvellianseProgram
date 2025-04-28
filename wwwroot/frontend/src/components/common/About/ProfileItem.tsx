export default function ProfileItem({
    imageUrl,
    name,
    role,
    description,
    size,
}:{
    imageUrl: string,
    name: string,
    role?: string,
    description?: string,
    size?: boolean,
}) {
    return(
        <div className={`bg-white ${size ? 'w-[280px]': 'w-[300px]'} border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
            <div className="overflow-hidden">
                <img className="rounded-t-lg" src={imageUrl} alt="" />
            </div>
            <div className="p-5">
                <div className="mb-2">
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                    <h1 className="text-purple-clr font-semibold text-sm">{role}</h1>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-md">{description}</p>

            </div>
        </div>
    );
}