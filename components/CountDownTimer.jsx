'use client';

const CountDownTimer = () => {
  return (
    <div>
      <div class="time-content">
        <div class="time days">
          <span class="number"></span>
          <span class="text">days</span>
        </div>
        <div class="time hours">
          <span class="number"></span>
          <span class="text">hours</span>
        </div>
        <div class="time minutes">
          <span class="number"></span>
          <span class="text">minutes</span>
        </div>
        <div class="time seconds">
          <span class="number"></span>
          <span class="text">seconds</span>
        </div>
      </div>
    </div>
  );
};

export default CountDownTimer;
