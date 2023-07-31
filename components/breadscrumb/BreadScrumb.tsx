"use client";

import useGetFromStore from "@/hooks/useGetFromStore";
import { useStore } from "@/store/store";

interface BreadScrumbProp {}

const BreadScrumb: React.FC<BreadScrumbProp> = () => {
  const breadScrumb: any = useGetFromStore(
    useStore,
    (state: any) => state.breadScrumb
  );

  return (
    breadScrumb && (
      <div className="p-3 text-gray-700 flex capitalize">
        {breadScrumb.map((item: string, index: number) => {
          if (index !== breadScrumb.length - 1) {
            return (
              <>
                <div>{item}</div>
                <div className="mx-3">/</div>
              </>
            );
          }
        })}
        <div>{breadScrumb[breadScrumb.length - 1]}</div>
      </div>
    )
  );
};

export default BreadScrumb;
