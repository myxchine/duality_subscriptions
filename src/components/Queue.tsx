const SongsComponent: React.FC<Props> = ({ songs }) => {
  const handleClick = (song: Song) => {
    console.log("Clicked", song);
  };

  return (
    <div className="mt-4 space-y-4">
      <h2 className="text-l text-white">Queue</h2>
      {songs.map((song, index) => (
        <div key={index} className=" pb-2">
          <div
            className="flex cursor-pointer items-center space-x-4 text-left"
            onClick={() => handleClick(song)}
          >
            <div>
              <img
                className="rounded-xl"
                width={60}
                src={song.album.images[0].url}
                alt={`${song.name} - Album Cover`}
              />
            </div>
            <div>
              <h2
                className="text truncate text-white"
                style={{
                  maxWidth: "250px",
                }}
              >
                {song.name}
              </h2>
              <p
                className="truncate text-xs text-white text-opacity-50"
                style={{
                  maxWidth: "200px",
                }}
              >
                {song.album.artists.map((artist) => artist.name).join(", ")} -{" "}
                {song.album.name}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SongsComponent;
