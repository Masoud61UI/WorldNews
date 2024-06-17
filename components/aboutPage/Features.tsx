import { IoNewspaperOutline } from "react-icons/io5";
import { TbWorldSearch } from "react-icons/tb";
import { GrValidate } from "react-icons/gr";

export default function Features() {
  return (
    <div>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-extrabold text-center mb-16">
          ویژگی های ما
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-md:max-w-md mx-auto">
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <div className="w-8 mb-4">
                <IoNewspaperOutline className="size-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">جدیدترین خبرها</h3>
              <p className="text-gray-500 text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <div className="w-8 mb-4">
                <TbWorldSearch className="size-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                اخبارهای داخلی و خارجی
              </h3>
              <p className="text-gray-500 text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="p-6">
              <div className="w-8 mb-4">
                <GrValidate className="size-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                منبعی معتبر برای اخبار
              </h3>
              <p className="text-gray-500 text-sm">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
                استفاده از طراحان گرافیک است.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
