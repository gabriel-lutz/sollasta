import styled from "styled-components";

export default function ImageGallery({
  displayingImage,
  setDisplayingImage,
  images,
}) {
  return (
    <Wrapper>
      <Images>
        {images.map((i) => (
          <img
            key={i.id}
            src={i.url}
            alt=""
            onClick={() => {
              setDisplayingImage(i.url);
            }}
          ></img>
        ))}
      </Images>
      <DisplayingImage src={displayingImage} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 20px;
  position: sticky;
  top: 150px;
  height: 90%;
  width: 50vw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Images = styled.div`
  height: 100%;
  max-height: 400px;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;
  cursor: pointer;
  ::-webkit-scrollbar {
    display: none;
  }
  img {
    margin: 10px 0;
    width: 100px;
  }
`;

const DisplayingImage = styled.img`
  width: 400px;
`;
