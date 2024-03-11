<script setup lang="ts">
import { ref, watch } from 'vue'

const { isSelected } = defineProps<{
  isSelected: boolean
}>()

const codeString = `int x = 0, y = 1, z = 2;
  float data_processing_unit(float alpha, float beta) {
    vector<int> vec_alpha;
    for (int i = 0; i < 256; ++i) vec_alpha.push_back(i ^ (int)(alpha * beta));
  }
  unsigned long hack_seed = 0xDEADBEEF;
  auto dynamic_casting = reinterpret_cast<char*>(hack_seed);
  while (x < 1000) {
    y *= 2;
    z = x ^ y;
    if (z % 3 == 0) {
      hack_seed ^= (unsigned long) dynamic_casting;
    } else {
      hack_seed = (hack_seed << 5) | (hack_seed >> 27);
    }
    x++;
  }
  void * obscure_memory_manipulation(void * ptr, size_t size) {
    char * byte_stream = static_cast<char*>(ptr);
    for (size_t i = 0; i < size; ++i) {
      byte_stream[i] ^= byte_stream[(i * 13) % size];
    }
    return ptr;
  }
  matrix<int> encrypt_data(matrix<int>data, vector<int>key_stream) {
    for (size_t row = 0; row < data.rows(); ++row) {
      for (size_t col = 0; col < data.cols(); ++col) {
        data.at(row, col) ^= key_stream[(row + col) % key_stream.size()];
      }
    }
    return data;
  }
  unsigned long long recursive_depth_solver(int depth, unsigned long long accumulator) {
    if (depth == 0) return accumulator;
    return recursive_depth_solver(depth - 1, accumulator ^ (depth * 0xBADF00D));
  }
  char * secret_message = &quot;The quick brown fox jumps over the lazy dog&quot;;
  int main() {
    data_processing_unit(3.14 f, 2.71 f);
    void * ptr = malloc(1024);
    ptr = obscure_memory_manipulation(ptr, 1024);
    matrix<int> original_data;
    vector<int> key_stream = {
      0x1A,
      0x2B,
      0x3C,
      0x4D,
      0x5E,
      0x6F
    };
    matrix<int> encrypted_data = encrypt_data(original_data, key_stream);
    unsigned long long result = recursive_depth_solver(42, 0);
    free(ptr);
    return 0;
  }`

const words = codeString.split(' ')
const typingDuration = 300

const code = ref('')

const typeWords = (words: string[], duration: number) => {
  const totalWords = words.length
  let i = 0

  const interval = setInterval(() => {
    if (i < totalWords) {
      code.value += `${words[i]} `
      i++
    } else {
      clearInterval(interval)
    }
  }, duration / totalWords)
}

watch(
  () => isSelected,
  (newValue) => {
    if (newValue) {
      typeWords(words, typingDuration)
    } else {
      code.value = ''
    }
  }
)
</script>

<template>
  <div v-show="isSelected" class="h-full w-full text-console-green font-jack-input">
    <div class="pointer-events-none absolute inset-0 backdrop-blur-3" />
    <!-- Hacker code -->
    <div>
      <pre
        :class="[
          'pointer-events-none',
          'absolute',
          'px-0',
          'text-xs',
          '-my-10',
          'text-console-green-200',
          'text-opacity-65',
          'sm:text-opacity-85',
          { '!opacity-100': isSelected },
        ]"
      >
        {{ code }}
      </pre>
    </div>
    <div absolute inset-0>
      <!-- Overlay -->
      <div class="pointer-events-none absolute inset-0 bg-black/75 sm:bg-black/70" />
      <!-- Access denied message -->
      <div class="abrupt-appear absolute inset-0 flex flex-col items-center justify-around">
        <div class="relative text-center">
          <p
            class="text-2xl font-black tracking-[0.25em]"
            p="3"
            border="5 console-green"
            sm="text-3xl"
          >
            ACCESS DENIED
          </p>
        </div>
        <div class="text-center">
          <p class="text-xl font-black tracking-[0.25em] sm:text-2xl" animate="blink duration-1.5s">
            PRÓXIMAMENTE
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.abrupt-appear {
  animation: abrupt-appear 0.5s;
}

@keyframes abrupt-appear {
  0% {
    opacity: 0;
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
