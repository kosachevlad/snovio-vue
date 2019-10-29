<template>
    <div class="preloader">
        <div class='sk-three-bounce'>
            <div class='sk-bounce-1 sk-child'></div>
            <div class='sk-bounce-2 sk-child'></div>
            <div class='sk-bounce-3 sk-child'></div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Preloader'
}
</script>
<style lang="scss">
$spinkit-size: 4em !default;
$spinkit-spinner-color: #26CF88 !default;
.sk-three-bounce {
    position: fixed;
    z-index: 9;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    $animationDuration: 1.4s;
    $delayRange: 0.32s;
    width: ($spinkit-size * 2);
    margin: auto;
    text-align: center;

  .sk-child {
    width: ($spinkit-size / 2);
    height: ($spinkit-size / 2);
    background-color: $spinkit-spinner-color;

    border-radius: 100%;
    display: inline-block;
    animation: sk-three-bounce $animationDuration ease-in-out 0s infinite both;
  }

  .sk-bounce-1 {
    animation-delay: -$delayRange;
  }
  .sk-bounce-2 {
    animation-delay: (-$delayRange / 2);
  }
}

@keyframes sk-three-bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1.0);
  }
}
</style>