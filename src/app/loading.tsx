import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export default function HomeLoading() {
  const arrayOfSize = (length: number) => Array.from({ length }, (_, i) => i);

  return (
    <ul className="grid grid-cols-3 gap-5 list-none">
      {arrayOfSize(6).map((idx) => (
        <li className="flex flex-col bg-white rounded p-5" key={idx}>
          <figure className="flex justify-center relative w-full max-h-[250px] pt-[91%] text-center sm:pt-[54%] self-center">
            <Skeleton
              containerClassName="flex-1"
              height={250}
              className="absolute inset-0 max-h-full m-auto object-contain"
            />
          </figure>

          <strong className="text-base leading-5 mt-1">
            <Skeleton width={220} />
            <Skeleton width={150} />
          </strong>

          <div className="flex flex-col mt-auto">
            <span className="text-[21px] font-bold mt-1 mb-5">
              <Skeleton containerClassName="flex-1" width={100} />
            </span>

            <button
              className="bg-[#7159c1] text-white border-0 rounded overflow-hidden relative flex items-center ease-in-out transition-all"
              type="button"
            >
              <span className="h-10 flex justify-center items-center flex-1">
                <SkeletonTheme baseColor="#997df5" highlightColor="#8a6cea">
                  <Skeleton containerClassName="flex-1" width={92} />
                </SkeletonTheme>
              </span>
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
