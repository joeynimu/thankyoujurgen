import { formatRelative } from "date-fns";

export default function MansonryItem({
  image_url,
  title,
  description,
  author,
  date,
  country,
  avatar_url,
}: {
  image_url?: string;
  title: string;
  description: string;
  author: string;
  date: Date;
  country: string;
  avatar_url?: string;
}) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
      <Pin />
      {image_url && (
        <div className="h-40 w-full text-white text-center flex items-center justify-center bg-gray-600">
          <img
            src={image_url}
            alt={title}
            loading="lazy"
            className="object-fill rounded-t"
          />
        </div>
      )}
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="flex items-center">
        <img
          src={avatar_url}
          alt={author}
          className="w-10 h-10 rounded-full mr-4"
          loading="lazy"
        />
        <div className="text-sm">
          <p className="text-gray-900 leading-none">
            {author} - 🇰🇪 {country}
          </p>
          <p className="text-gray-600">{formatRelative(new Date(), date)}</p>
        </div>
      </div>
    </div>
  );
}

function Pin() {
  return (
    <div className="absolute w-[60px] h-[50px] left-[20px]">
      <div className="absolute top-[18px] left-[-8px] w-[35px] h-[35px] rounded-[50%] bg-[radial-gradient(var(--paper-shadow), 20%, rgba(201, 191, 141, 0))]"></div>
      <div className="absolute w-[5px] h-[20px] rounded-[0 0 30% 30%] rotate-45 origin-bottom-left top-[15px] border-b-[1px solid #808080]"></div>
      <div className="bottom-circle"></div>
    </div>
  );
}
