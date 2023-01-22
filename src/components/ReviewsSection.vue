<template>
  <section class="container" id="comments">
    <div class="comments">
      <div class="comments__title-container">
        <h2
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-duration="1000"
          class="comments__title section-title"
        >
          People love Big Invest
        </h2>
        <div class="arrows-container comments__arrows">
          <div class="arrows-container__arrow-wrapper" @click="prevSlide">
            <img
              class="arrows-container__arrow arrows-container__left__arrow"
              src="@/assets/arrowPrev.svg"
              alt="left-arrow-img"
            />
          </div>
          <div class="arrows-container__arrow-wrapper" @click="nextSlide">
            <img
              class="arrows-container__arrow arrows-container__right__arrow"
              src="@/assets/arrowNext.svg"
              alt="right-arrow-img"
            />
          </div>
        </div>
      </div>
      <div class="comments__list">
        <div
          class="comment"
          v-for="review in reviews"
          :key="review.id"
          :class="{ active: review.id === currentSlide }"
        >
          <div class="comment-header">
            <img class="comment-image" :src="review.image" alt="person-ing" />
            <div>
              <h3 class="comment-name">{{ review.name }}</h3>
              <p class="comment-position">{{ review.position }}</p>
            </div>
          </div>
          <div>
            <p class="comment-text">{{ review.text }}</p>
            <p class="pagination">
              0{{ currentSlide }} / 0{{ reviews.length }}
            </p>
          </div>
        </div>
        <div class="arrows-container comments__btn">
          <div class="arrows-container__arrow-wrapper" @click="prevSlide">
            <img
              class="arrows-container__arrow arrows-container__left__arrow"
              src="@/assets/arrowPrev.svg"
              alt="left-arrow-img"
            />
          </div>
          <div class="arrows-container__arrow-wrapper" @click="nextSlide">
            <img
              class="arrows-container__arrow arrows-container__right__arrow"
              src="@/assets/arrowNext.svg"
              alt="right-arrow-img"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        {
          id: 1,
          name: 'Albert Abello',
          position: 'Director of Growth',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsam accusantium culpa facere quia facilis quibusdam asperiores cumque repellat sed!',
          image:
            'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        },
        {
          id: 2,
          name: 'Daniel Smt',
          position: 'Designer',
          text: 'lorem  It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.',
          image:
            'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80',
        },
        {
          id: 3,
          name: 'Third Person',
          position: 'SEO',
          text: 'This magical product   It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.',
          image:
            'https://st2.depositphotos.com/3143277/8644/i/600/depositphotos_86446164-stock-photo-business-man-in-office.jpg',
        },
        {
          id: 4,
          name: 'Fourth Person',
          position: 'Tech director',
          text: 'This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our',
          image:
            'https://st2.depositphotos.com/1662991/8837/i/450/depositphotos_88370500-stock-photo-mechanic-wearing-overalls.jpg',
        },
      ],
      currentSlide: 1,
    };
  },
  methods: {
    nextSlide() {
      if (this.currentSlide === this.reviews.length) {
        this.currentSlide = 1;
      } else {
        this.currentSlide += 1;
      }
    },
    prevSlide() {
      if (this.currentSlide === 1) {
        this.currentSlide = this.reviews.length;
      } else {
        this.currentSlide -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.comments {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 140px 120px 0;

  @include onTablet {
    flex-direction: column;
    padding: 80px 20px 0;
  }
  @include onMobile {
    flex-direction: column;
    padding: 0px 40px 0;
  }

  &__title {
    position: relative;
    max-width: 483px;
    margin-bottom: 47px;
    min-width: 410px;

    @include onLaptop {
      margin-right: 20px;
    }

    @include onTablet {
      min-width: 0;
    }

    @include onMobile {
      width: 225px;
      margin-bottom: 24px !important;
    }

    &::after {
      content: '';
      left: 0;
      position: absolute;
      background: #6248ff;
      opacity: 0.1;
      width: 160px;
      height: 80px;

      @include onTablet {
        width: 160px;
        height: 60px;
      }

      @include onMobile {
        width: 185px;
        height: 50px;
      }
    }
  }

  &__title-container {
    @include onTablet {
      margin-right: auto;
    }
  }

  &__arrows {
    @include onTablet {
      display: none !important;
    }
  }

  &__btn {
    display: none !important;
    @include onTablet {
      display: flex !important;
    }
  }

  &__list {
    display: flex;
    position: relative;
    top: 50px;

    @include onTablet {
      top: 0;
    }

    &::before {
      content: '';
      position: absolute;
      top: 90px;
      left: -48px;
      background-image: url(../assets/quotation.svg);
      background-repeat: no-repeat;
      background-size: contain;
      width: 33px;
      height: 27px;

      @include onTablet {
        top: 180px;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
      }
    }
  }
}

.arrows-container {
  left: 120px;
  display: flex;
  max-width: 112px;
  justify-content: space-between;

  @include onTablet {
    max-width: 100%;
    position: absolute;
    justify-content: space-between;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  @include onMobile {
    max-width: 100%;
    position: absolute;
    justify-content: space-between;
    left: 0;
    right: 0;
    top: 98%;
    transform: translateY(-50%);
  }

  &__arrow-wrapper {
    position: relative;
    width: 48px;
    height: 48px;
    background: #fff;
    border: 1px solid #e0e0e0;
    border-radius: 50%;

    &:hover {
      border: 1px solid #6248ff;
      cursor: pointer;
    }

    &:first-child {
      margin-right: 16px;
    }
  }

  &__arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.comment {
  flex: 1;
  display: none;
  max-width: 585px;

  @include onTablet {
    max-width: 100%;
    padding: 0 90px;
  }
  @include onMobile {
    max-width: 100%;
    padding: 0;
  }

  &.active {
    display: flex;
    flex-direction: column;

    @include onTablet {
      align-items: center;
    }
  }

  &-header {
    display: flex;
    align-items: center;

    @include onTablet {
      flex-direction: column;
      margin-bottom: 60px;
    }
  }

  &-image {
    width: 73px;
    height: 73px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0 30px 17px 0;
    object-fit: cover;
    @include onTablet {
      margin: 0 auto 10px;
    }
  }

  &-name {
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    @include onTablet {
      text-align: center;
    }
  }

  &-position {
    font-weight: 300;
    font-size: 16px;
    line-height: 27px;

    @include onTablet {
      text-align: center;
    }
  }

  &-text {
    margin-bottom: 31px;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: #333333;
    @include onTablet {
      text-align: center;
    }
  }
}
.pagination {
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #6248ff;

  @include onTablet {
    text-align: center;
  }
}
</style>
