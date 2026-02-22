<template>
    <footer class="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-6 mt-10">
        <div class="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <!-- Logo + Name -->
            <div class="flex items-center gap-2 font-khmer">
                <h2> <b>រក្សាទំនាក់ទំនង </b><br>
                   សូមអធ្យាស្រ័យទុកជាមុន រាល់ការចាំយូរឬ​ <br>
                   មានការយឺតយ៉ាវពីរខាងហាងរបស់យើងខ្ញុំ។<br>
                   សូមពិសារអាហារនិង​ ទស្សនាទេសភាពក្នុង<br>
                   ហាង​ ក៏ដូចជាមានកន្លែងក្មែងលេងផងដែរ<br>
                </h2>
            </div>

            <!-- Navigation Links -->
            <div>
                <div class=" items-center gap-2 font-khmer">
                    <h2> <b>ព័ត៌មានលម្អិតទំនាក់ទំនង</b><br>
                        ភូមិអង្គក្រសាំង​​ ឃុំព្រៃល្វា​ ស្រុកព្រៃកប្បាស ខេត្តតាកែវ<br>
                        មើលនៅលើផែនទី<br>
                    </h2>
                    <h2>
                        លេខទូរស័ព្ទ <br>
                        ០៩២២៧៣៩០២
                    </h2>

                </div>


            </div>

            <!-- Copyright -->
            <div class="flex items-center gap-2 font-khmer">
                <div> <b>ម៉ោងបើក </b> <br>
                អាហារពេលព្រឹក៖ ៥:៣០  - ៨:៣០ ព្រឹក<br>
                អាហារពេលព្រឹក៖ ១០:៣០  - ១:៣០ រសៀល<br>
                អាហារពេលព្រឹក៖ ៤:៣០ - ១០:០០​ ល្ងាច<br>
                បើក 7 ថ្ងៃក្នុងមួយសប្តាហ៍ <br>
            </div>
            </div>
        </div>

        <div class="​ ">
            <div class="flex  gap-4 text-sm justify-center py-5">
                <img :src="logo" alt="Logo" class="w-12 h-12 rounded-full" />
                <span class="font-bold text-lg">ម្ហូប ខ្មែរ</span>
            </div>
            <div class="flex  gap-4 text-sm justify-center py-5 font-khmer">
                <RouterLink to="/" class="hover:underline">ទំព័រដើម</RouterLink>
                <RouterLink to="/about" class="hover:underline">ម្ហូប</RouterLink>
                <RouterLink to="/about" class="hover:underline">បង្ហែម</RouterLink>
                <RouterLink to="/about" class="hover:underline">ទំនាក់ទំនង</RouterLink>
                <RouterLink to="/about" class="hover:underline">អំពីយើង</RouterLink>
            </div>
        </div>

    </footer>
</template>

<script setup lang="ts">
import logo from '@/assets/logo.jpg'
</script>