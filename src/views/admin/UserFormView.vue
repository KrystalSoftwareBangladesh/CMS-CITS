<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'
import BaseSwitch from '@/components/ui/BaseSwitch.vue'
import BaseAlert from '@/components/ui/BaseAlert.vue'
import type { SelectOption } from '@/types/admin'
import { ArrowLeft, Save } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

const isEditMode = computed(() => route.params.id !== undefined)
const pageTitle = computed(() => isEditMode.value ? 'Edit User' : 'Create User')

const formData = ref({
  name: isEditMode.value ? 'John Doe' : '',
  email: isEditMode.value ? 'john@example.com' : '',
  role: isEditMode.value ? 'Admin' : '',
  status: isEditMode.value ? 'active' : 'pending',
  sendWelcomeEmail: true,
  requirePasswordChange: false
})

const errors = ref<Record<string, string>>({})
const isSaving = ref(false)
const showSuccess = ref(false)

const roleOptions: SelectOption[] = [
  { label: 'Admin', value: 'Admin' },
  { label: 'Editor', value: 'Editor' },
  { label: 'Author', value: 'Author' },
  { label: 'Viewer', value: 'Viewer' }
]

const statusOptions: SelectOption[] = [
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
  { label: 'Pending', value: 'pending' }
]

function validate(): boolean {
  errors.value = {}
  
  if (!formData.value.name.trim()) {
    errors.value.name = 'Name is required'
  }
  
  if (!formData.value.email.trim()) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = 'Please enter a valid email'
  }
  
  if (!formData.value.role) {
    errors.value.role = 'Role is required'
  }
  
  return Object.keys(errors.value).length === 0
}

async function handleSubmit() {
  if (!validate()) return
  
  isSaving.value = true
  
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  isSaving.value = false
  showSuccess.value = true
  
  setTimeout(() => {
    showSuccess.value = false
  }, 3000)
}

function goBack() {
  router.push('/admin/users')
}
</script>

<template>
  <div class="max-w-3xl">
    <div class="mb-6">
      <button
        type="button"
        class="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700 mb-4"
        @click="goBack"
      >
        <ArrowLeft class="w-4 h-4" />
        Back to Users
      </button>
      <h1 class="text-2xl font-bold text-gray-900">{{ pageTitle }}</h1>
      <p class="text-sm text-gray-500">
        {{ isEditMode ? 'Update user information and permissions' : 'Add a new user to your team' }}
      </p>
    </div>

    <BaseAlert v-if="showSuccess" variant="success" dismissible class="mb-6" @dismiss="showSuccess = false">
      User saved successfully!
    </BaseAlert>

    <form @submit.prevent="handleSubmit">
      <BaseCard class="mb-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Basic Information</h2>
        <div class="space-y-4">
          <BaseInput
            v-model="formData.name"
            label="Full Name"
            placeholder="Enter full name"
            :error="errors.name"
            required
          />
          <BaseInput
            v-model="formData.email"
            type="email"
            label="Email Address"
            placeholder="Enter email address"
            :error="errors.email"
            required
          />
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <BaseSelect
              v-model="formData.role"
              label="Role"
              :options="roleOptions"
              placeholder="Select a role"
              :error="errors.role"
              required
            />
            <BaseSelect
              v-model="formData.status"
              label="Status"
              :options="statusOptions"
            />
          </div>
        </div>
      </BaseCard>

      <BaseCard class="mb-6">
        <h2 class="text-lg font-semibold text-gray-900 mb-4">Account Settings</h2>
        <div class="space-y-4">
          <BaseSwitch
            v-model="formData.sendWelcomeEmail"
            label="Send welcome email"
          />
          <BaseSwitch
            v-model="formData.requirePasswordChange"
            label="Require password change on first login"
          />
        </div>
      </BaseCard>

      <div class="flex items-center justify-end gap-3 sticky bottom-0 bg-gray-50 -mx-6 px-6 py-4 border-t border-gray-200">
        <BaseButton variant="outline" type="button" @click="goBack">
          Cancel
        </BaseButton>
        <BaseButton type="submit" :loading="isSaving">
          <Save class="w-4 h-4 mr-2" />
          {{ isEditMode ? 'Update User' : 'Create User' }}
        </BaseButton>
      </div>
    </form>
  </div>
</template>
