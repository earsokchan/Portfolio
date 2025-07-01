import React from 'react';
import styled from 'styled-components';

const ImageDisplay = ({ src, alt, heading = '', description = '', style = {} }) => (
  <StyledWrapper style={style}>
    <div className="card-container">
      <div className="card">
        <div className="img-content">
          <img src={src} alt={alt} />
        </div>
        <div className="content">
          <p className="heading">{heading}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  .card-container {
    width: 100%;
    max-width: 320px;
    aspect-ratio: 1/1;
    position: relative;
    border-radius: 10px;
    margin: 0 auto;
  }

  .card-container::before {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
  }

  .card {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    overflow: hidden;
    position: relative;
  }

  .card .img-content {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100% );
    transition: scale 0.6s, rotate 0.6s, filter 1s;
    overflow: hidden;
    position: relative;
  }

  .card .img-content img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 0;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    display: block;
  }

  .card .content {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 10px;
    color: #e8e8e8;
    padding: 20px;
    line-height: 1.5;
    border-radius: 5px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(50px);
    transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
    background: transparent;
  }

  .card .content .heading {
    font-size: 32px;
    font-weight: 700;
  }

  .card:hover .content {
    opacity: 1;
    transform: translateY(0);
  }

  .card:hover .img-content {
    scale: 2.5;
    rotate: 30deg;
    filter: blur(7px);
  }

  .card:hover .img-content img {
    opacity: 0;
  }

  @media (max-width: 600px) {
    .card-container {
      max-width: 100vw;
      width: 100%;
      aspect-ratio: 1/1;
      min-width: 0;
      height: auto;
    }
    .card {
      min-width: 0;
      width: 100%;
      height: auto;
      aspect-ratio: 1/1;
    }
    .card .img-content,
    .card .img-content img {
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
      aspect-ratio: 1/1;
    }
    .card .content .heading {
      font-size: 22px;
    }
    .card .content {
      padding: 10px;
    }
  }
`;

export default ImageDisplay;
