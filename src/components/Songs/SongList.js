import Songs from "./Songs";

const SongList = () => {
    return (
        <div>
            <h1>Your favoutite songs are: </h1>

            <ul>
                <Songs title="Last thing on my mind" artist="Steps"/>
                <Songs title="If you're over me" artist="Years and Years"/>
            </ul>
            

        </div>
    )

}

export default SongList;