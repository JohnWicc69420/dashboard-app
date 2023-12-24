import Featured from "./components/featured/Featured";
import CategoryList from "./components/categoryList/CategoryList";
import CardList from "./components/cardList/CardList";
import Menu from "./components/menu/Menu";

export default async function Home() {
  const BASE_URL = "https://main--blog-app64209.netlify.app";
  const LOCAL_HOST = "http://localhost:3000";
  const getData = async () => {
    try {
      const res = await fetch(`${BASE_URL}/api/blogs`, {
        cache: "no-store",
      });
      if (!res.ok) {
        throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }
      return res.json();
    } catch (error) {
      console.error("Could Not Fetch Blogs: ", error);
      throw error;
    }
  };

  try {
    const { blogs } = await getData();
    const data = blogs;

    if (!data) {
      return (
        <>
          <h1 className="text-3xl p-3">Loading...</h1>
        </>
      );
    } else {
      return (
        <>
          <>
            <div className="flex dark:text-[#ddd] dark:bg-[#0f172a] px-4 md:px-20 xl:px-40 2xl:px-60 flex-col items-start h-full">
              <Featured />
              <CategoryList />
              <div className="flex items-start w-full gap-6">
                <div className=" lg:w-8/12 w-full">
                  <CardList
                    slug={null}
                    isCat={false}
                    data={data}
                    buttons={true}
                  />
                </div>
                <div className=" w-4/12 hidden lg:block">
                  <Menu data={data} />
                </div>
              </div>
            </div>
          </>
        </>
      );
    }
  } catch (error) {
    console.error("Error in Home component: ", error);
    return (
      <>
        <h1 className="text-3xl p-3">Error loading data</h1>
      </>
    );
  }
}
