import { Link } from "react-router-dom";

export function OfferList(props: { offerData: any; isDataLoaded: any }) {
  const { offerData, isDataLoaded } = props;

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const monthNames = [
      "JAN",
      "FEB",
      "MAR",
      "APR",
      "MAY",
      "JUN",
      "JUL",
      "AUG",
      "SEP",
      "OCT",
      "NOV",
      "DEC",
    ];
    return `${
      monthNames[date.getMonth()]
    } ${date.getDate()}, ${date.getFullYear()}`;
  };

  const getOfferStyle = (offer_type: string) => {
    switch (offer_type) {
      case "Surface Offer":
        return "bg-lime-100";
      case "Investment Offer":
        return "bg-sky-100";
      case "Project Offer":
        return "bg-yellow-100";
      default:
        return {};
    }
  };

  return (
    isDataLoaded && (
      <div>
        {/* OFFER LIST */}
        <section className="py-24 relative">
          <div className="w-full max-w-7xl px-4 md:px-5 lg:px-6 mx-auto">
            <div className="main-box border border-gray-200 rounded-xl pt-6 max-w-xl lg:max-w-full mx-auto">
              {offerData.map((offer: any, index: number) => (
                <Link
                  to={
                    offer.offer_type === "Surface Offer"
                      ? `/projects/surface-details/${offer.slug}`
                      : offer.offer_type === "Investment Offer"
                      ? `/projects/investment-details/${offer.slug}`
                      : offer.offer_type === "Project Offer"
                      ? `/projects/project-details/${offer.slug}`
                      : `/offer/${offer.slug}`
                  }
                  key={index}
                >
                  <div className="flex flex-col lg:flex-row items-center py-6 border-b border-gray-200 gap-6 w-full hover:bg-indigo-50">
                    <div className="ml-5 img-box w-full lg:max-w-[180px]">
                      <img
                        src={`http://localhost:8000${offer.cover_image}`}
                        alt={`${offer.offer_name} image`}
                        className="aspect-square w-full rounded-lg"
                      />
                    </div>
                    <div className="flex flex-row items-center w-full">
                      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
                        <div className="flex items-center">
                          <div>
                            <h2 className="font-semibold text-xl leading-8 text-black mb-3">
                              {offer.offer_name}
                            </h2>
                            <p className="font-normal text-lg leading-8 text-gray-500 mb-3">
                              Location: {offer.location}
                            </p>
                            <div className="flex items-center">
                              <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                Area: {offer.surface_area || "-"} m<sup>2</sup>
                              </p>
                              <p className="font-medium text-base leading-7 text-black pr-4 mr-4 border-r border-gray-200">
                                Budget: {offer.investment_amount || "-"} €
                              </p>
                              <p
                                className={`font-medium text-base leading-7 rounded-full px-3 text-black ${getOfferStyle(
                                  offer.offer_type
                                )}`}
                              >
                                {offer.offer_type}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-5">
                          <div className="col-span-5 lg:col-span-2 flex items-center">
                            <div className="flex gap-3 lg:block">
                              <p className="font-medium text-sm leading-7 text-black">
                                Status
                              </p>
                              <p
                                className={`font-medium text-sm leading-6 py-0.5 px-3 rounded-full lg:mt-3 bg-${offer.status.toLowerCase()}-50 text-${offer.status.toLowerCase()}-600`}
                              >
                                {offer.status}
                              </p>
                            </div>
                          </div>
                          <div className="col-span-5 lg:col-span-2 flex items-center">
                            <div className="flex gap-3 lg:block">
                              <p className="font-medium text-sm whitespace-nowrap leading-6 text-black">
                                Start Date
                              </p>
                              <p className="font-medium text-base whitespace-nowrap leading-7 lg:mt-3 text-emerald-500">
                                {formatDate(offer.start_date)}
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="mt-5 line-clamp-3 text-base leading-6 text-gray-600">
                          {offer.offer_description}
                        </p>
                        {offer.progress !== undefined && (
                          <div className="relative">
                            <div className="w-64 bg-gray-200 rounded-full dark:bg-gray-700 mt-2">
                              <div
                                className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
                                style={{ width: `${offer.progress}%` }}
                              >
                                {offer.progress}%
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    )
  );
}
