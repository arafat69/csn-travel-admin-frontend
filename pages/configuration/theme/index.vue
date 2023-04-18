<template>
  <div class="mt-3">
    <h4 class="header_title">Configuration</h4>
    <div class="card card-body">
      <div class="Configaration_header">
        <ul class="nav nav-pills">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/configuration">
              Business Info
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link active" to="/configuration/theme">
              Theme
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/configuration/template">
              Template
            </nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/configuration/accounting">
              Accounting
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="configaration_contents mt-4">
        <h4 class="title">Your business brand color</h4>
        <div class="primary_reset">
          <span>Primary Color</span>
          <button>Reset</button>
        </div>
        <form action="">
          <div class="brand_color_box">
            <input type="text" name="" id="brandColor" style="display: none;">
            <div class="colorBox" id="colorBox"></div>
            <button class="btn default-bg text-white py-2 px-4">Save & Change</button>
          </div>
        </form>

        <div class="font-18 my-3">Choose Color</div>
        <div class="color_picker_section">

          <div class="color_picker">
            <div class="colorName bg-blue" onclick="setColor('#0d6efd')">
              <p>Blue</p>
              <span>#0d6efd</span>
            </div>
            <div class="colorScreen">
              <div class="item bg-blue-100">Blue-100</div>
              <div class="item bg-blue-200">Blue-200</div>
              <div class="item bg-blue-300">Blue-300</div>
              <div class="item bg-blue-400">Blue-400</div>
              <div class="item bg-blue-500">Blue-500</div>
              <div class="item bg-blue-600">Blue-600</div>
              <div class="item bg-blue-700">Blue-700</div>
              <div class="item bg-blue-800">Blue-800</div>
              <div class="item bg-blue-900">Blue-900</div>
            </div>
          </div>

          <div class="color_picker">
            <div class="colorName bg-indigo" onclick="setColor('#6610f2')">
              <p>Indigo</p>
              <span>#6610f2</span>
            </div>
            <div class="colorScreen">
              <div class="item bg-indigo-100">Indigo-100</div>
              <div class="item bg-indigo-200">Indigo-200</div>
              <div class="item bg-indigo-300">Indigo-300</div>
              <div class="item bg-indigo-400">Indigo-400</div>
              <div class="item bg-indigo-500">Indigo-500</div>
              <div class="item bg-indigo-600">Indigo-600</div>
              <div class="item bg-indigo-700">Indigo-700</div>
              <div class="item bg-indigo-800">Indigo-800</div>
              <div class="item bg-indigo-900">Indigo-900</div>
            </div>
          </div>

          <div class="color_picker">
            <div class="colorName bg-pink" onclick="setColor('#EC4899')">
              <p>Pink</p>
              <span>#EC4899</span>
            </div>
            <div class="colorScreen">
              <div class="item bg-pink-100">Pink-100</div>
              <div class="item bg-pink-200">Pink-200</div>
              <div class="item bg-pink-300">Pink-300</div>
              <div class="item bg-pink-400">Pink-400</div>
              <div class="item bg-pink-500">Pink-500</div>
              <div class="item bg-pink-600">Pink-600</div>
              <div class="item bg-pink-700">Pink-700</div>
              <div class="item bg-pink-800">Pink-800</div>
              <div class="item bg-pink-900">Pink-900</div>
            </div>
          </div>
          <div class="color_picker">
            <div class="colorName bg-red" onclick="setColor('#EF4444')">
              <p>Red</p>
              <span>#EF4444</span>
            </div>
            <div class="colorScreen">
              <div class="item bg-red-100">Red-100</div>
              <div class="item bg-red-200">Red-200</div>
              <div class="item bg-red-300">Red-300</div>
              <div class="item bg-red-400">Red-400</div>
              <div class="item bg-red-500">Red-500</div>
              <div class="item bg-red-600">Red-600</div>
              <div class="item bg-red-700">Red-700</div>
              <div class="item bg-red-800">Red-800</div>
              <div class="item bg-red-900">Red-900</div>
            </div>
          </div>

          <div class="color_picker">
            <div class="colorName bg-yellow" onclick="setColor('#EAB308')">
              <p>Yellow</p>
              <span>#EAB308</span>
            </div>
            <div class="colorScreen">
              <div class="item bg-yellow-100">Yellow-100</div>
              <div class="item bg-yellow-200">Yellow-200</div>
              <div class="item bg-yellow-300">Yellow-300</div>
              <div class="item bg-yellow-400">Yellow-400</div>
              <div class="item bg-yellow-500">Yellow-500</div>
              <div class="item bg-yellow-600">Yellow-600</div>
              <div class="item bg-yellow-700">Yellow-700</div>
              <div class="item bg-yellow-800">Yellow-800</div>
              <div class="item bg-yellow-900">Yellow-900</div>
            </div>
          </div>

          <div class="color_picker">
            <div class="colorName bg-green" onclick="setColor('#22C55E')">
              <p>Green</p>
              <span>#22C55E</span>
            </div>
            <div class="colorScreen">
              <div class="item bg-green-100">Green-100</div>
              <div class="item bg-green-200">Green-200</div>
              <div class="item bg-green-300">Green-300</div>
              <div class="item bg-green-400">Green-400</div>
              <div class="item bg-green-500">Green-500</div>
              <div class="item bg-green-600">Green-600</div>
              <div class="item bg-green-700">Green-700</div>
              <div class="item bg-green-800">Green-800</div>
              <div class="item bg-green-900">Green-900</div>
            </div>
          </div>
          <div class="color_picker">
            <div class="colorName bg-teal" onclick="setColor('#14B8A6')">
              <p>Teal</p>
              <span>#14B8A6</span>
            </div>
            <div class="colorScreen">
              <div class="item bg-teal-100">Teal-100</div>
              <div class="item bg-teal-200">Teal-200</div>
              <div class="item bg-teal-300">Teal-300</div>
              <div class="item bg-teal-400">Teal-400</div>
              <div class="item bg-teal-500">Teal-500</div>
              <div class="item bg-teal-600">Teal-600</div>
              <div class="item bg-teal-700">Teal-700</div>
              <div class="item bg-teal-800">Teal-800</div>
              <div class="item bg-teal-900">Teal-900</div>
            </div>
          </div>

          <div class="color_picker">
            <div class="colorName bg-violet" onclick="setColor('#8B5CF6')">
              <p>Violet</p>
              <span>#8B5CF6</span>
            </div>
            <div class="colorScreen">
              <div class="item bg-violet-100">Violet-100</div>
              <div class="item bg-violet-200">Violet-200</div>
              <div class="item bg-violet-300">Violet-300</div>
              <div class="item bg-violet-400">Violet-400</div>
              <div class="item bg-violet-500">Violet-500</div>
              <div class="item bg-violet-600">Violet-600</div>
              <div class="item bg-violet-700">Violet-700</div>
              <div class="item bg-violet-800">Violet-800</div>
              <div class="item bg-violet-900">Violet-900</div>
            </div>
          </div>

          <div class="color_picker">
            <div class="colorName bg-blue-gray" onclick="setColor('#64748B')">
              <p>Blue Gray</p>
              <span>#64748B</span>
            </div>
            <div class="colorScreen">
              <div class="item bg-blue-gray-100">Blue-gray-100</div>
              <div class="item bg-blue-gray-200">Blue-gray-200</div>
              <div class="item bg-blue-gray-300">Blue-gray-300</div>
              <div class="item bg-blue-gray-400">Blue-gray-400</div>
              <div class="item bg-blue-gray-500">Blue-gray-500</div>
              <div class="item bg-blue-gray-600">Blue-gray-600</div>
              <div class="item bg-blue-gray-700">Blue-gray-700</div>
              <div class="item bg-blue-gray-800">Blue-gray-800</div>
              <div class="item bg-blue-gray-900">Blue-gray-900</div>
            </div>
          </div>
          <div class="color_picker">
            <div class="colorName bg-blue">
              <p>Blue</p>
              <span>#0d6efd</span>
            </div>
            <div class="colorScreen">
              <div class="item bg-blue-100">Blue-100</div>
              <div class="item bg-blue-200">Blue-200</div>
              <div class="item bg-blue-300">Blue-300</div>
              <div class="item bg-blue-400">Blue-400</div>
              <div class="item bg-blue-500">Blue-500</div>
              <div class="item bg-blue-600">Blue-600</div>
              <div class="item bg-blue-700">Blue-700</div>
              <div class="item bg-blue-800">Blue-800</div>
              <div class="item bg-blue-900">Blue-900</div>
            </div>
          </div>

          <div class="color_picker">
            <div class="colorName bg-indigo">
              <p>Indigo</p>
              <span>#6610f2</span>
            </div>
            <div class="colorScreen">
              <div class="item bg-indigo-100">Indigo-100</div>
              <div class="item bg-indigo-200">Indigo-200</div>
              <div class="item bg-indigo-300">Indigo-300</div>
              <div class="item bg-indigo-400">Indigo-400</div>
              <div class="item bg-indigo-500">Indigo-500</div>
              <div class="item bg-indigo-600">Indigo-600</div>
              <div class="item bg-indigo-700">Indigo-700</div>
              <div class="item bg-indigo-800">Indigo-800</div>
              <div class="item bg-indigo-900">Indigo-900</div>
            </div>
          </div>

          <div class="color_picker">
            <div class="colorName bg-pink">
              <p>Pink</p>
              <span>#6610f2</span>
            </div>
            <div class="colorScreen">
              <div class="item bg-pink-100">pink-100</div>
              <div class="item bg-pink-200">pink-200</div>
              <div class="item bg-pink-300">pink-300</div>
              <div class="item bg-pink-400">pink-400</div>
              <div class="item bg-pink-500">pink-500</div>
              <div class="item bg-pink-600">pink-600</div>
              <div class="item bg-pink-700">pink-700</div>
              <div class="item bg-pink-800">pink-800</div>
              <div class="item bg-pink-900">pink-900</div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped></style>
