<template>
  <div class="container">
    <div class="comments-section">
      <div class="title-section">
        <h2 class="title">People love Big Invest</h2>
        <div class="arrows-container">
          <div class="arrow-wrapper" @click="prevSlide">
            <img
              class="arrow"
              src="@/assets/arrowPrev.svg"
              alt="left-arrow-img"
            />
          </div>
          <div class="arrow-wrapper" @click="nextSlide">
            <img
              class="arrow"
              src="@/assets/arrowNext.svg"
              alt="right-arrow-img"
            />
          </div>
        </div>
      </div>
      <div class="comments">
        <div
          class="comment"
          v-for="review in reviews"
          :key="review.id"
          :class="{ active: review.id === currentSlide }"
        >
          <div class="comment-header">
            <img class="comment-image" :src="review.image" />
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
      </div>
    </div>
  </div>
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
          text: 'This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.',
          image: 'src/assets/person1.png',
        },
        {
          id: 2,
          name: 'Second person',
          position: 'Director of Growth',
          text: 'This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.',
          image: 'src/assets/person1.png',
        },
        {
          id: 3,
          name: 'Third Person',
          position: 'Director of Growth',
          text: 'This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.',
          image: 'src/assets/person1.png',
        },
        {
          id: 4,
          name: 'Fourth Person',
          position: 'Director of Growth',
          text: 'This magical product actually works! It has radically changed the way we build our audiences. Increasing new customer sales by 6x in our most mature market.',
          image: 'src/assets/person1.png',
        },
      ],
      currentSlide: 1,
    }
  },
  methods: {
    nextSlide() {
      if (this.currentSlide === this.reviews.length) {
        this.currentSlide = 1
      } else {
        this.currentSlide += 1
      }
    },
    prevSlide() {
      if (this.currentSlide === 1) {
        this.currentSlide = this.reviews.length
      } else {
        this.currentSlide -= 1
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.comments-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  position: relative;
  font-weight: 600;
  font-size: 56px;
  line-height: 66px;
  color: #333;
  max-width: 483px;
  margin-bottom: 47px;

  &::after {
    content: '';
    left: 0;
    position: absolute;
    background: #6248ff;
    opacity: 0.1;
    width: 355px;
    height: 72px;
  }
}

.arrows-container {
  display: flex;
  max-width: 112px;
  justify-content: space-between;
}

.arrow-wrapper {
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
}

.arrow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.comments {
  display: flex;
  position: relative;
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
  }
}
.comment {
  flex: 1;
  display: none;
  max-width: 585px;

  &.active {
    display: flex;
    flex-direction: column;
  }

  &-header {
    display: flex;
    align-items: center;
  }

  &-image {
    width: 73px;
    height: 73px;
    margin: 0 30px 17px 0;
  }

  &-name {
    font-weight: 500;
    font-size: 18px;
    line-height: 30px;
  }

  &-position {
    font-weight: 400;
    font-size: 16px;
    line-height: 27px;
  }

  &-text {
    margin-bottom: 31px;
    font-weight: 500;
    font-size: 24px;
    line-height: 29px;
    color: #333333;
  }
}
.pagination {
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #6248ff;
}
</style>
