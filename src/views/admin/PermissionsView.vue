<script setup lang="ts">
import { ref } from 'vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseCheckbox from '@/components/ui/BaseCheckbox.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import { Save, Users, FileText, Image, Settings, Shield } from 'lucide-vue-next'

const permissionGroups = [
  {
    name: 'Users',
    icon: Users,
    permissions: [
      { id: 'users.view', label: 'View users', admin: true, editor: true, author: false },
      { id: 'users.create', label: 'Create users', admin: true, editor: false, author: false },
      { id: 'users.edit', label: 'Edit users', admin: true, editor: false, author: false },
      { id: 'users.delete', label: 'Delete users', admin: true, editor: false, author: false }
    ]
  },
  {
    name: 'Content',
    icon: FileText,
    permissions: [
      { id: 'content.view', label: 'View content', admin: true, editor: true, author: true },
      { id: 'content.create', label: 'Create content', admin: true, editor: true, author: true },
      { id: 'content.edit', label: 'Edit all content', admin: true, editor: true, author: false },
      { id: 'content.delete', label: 'Delete content', admin: true, editor: true, author: false },
      { id: 'content.publish', label: 'Publish content', admin: true, editor: true, author: false }
    ]
  },
  {
    name: 'Media',
    icon: Image,
    permissions: [
      { id: 'media.view', label: 'View media', admin: true, editor: true, author: true },
      { id: 'media.upload', label: 'Upload media', admin: true, editor: true, author: true },
      { id: 'media.delete', label: 'Delete media', admin: true, editor: true, author: false }
    ]
  },
  {
    name: 'Settings',
    icon: Settings,
    permissions: [
      { id: 'settings.view', label: 'View settings', admin: true, editor: false, author: false },
      { id: 'settings.edit', label: 'Edit settings', admin: true, editor: false, author: false }
    ]
  }
]

const isSaving = ref(false)

async function savePermissions() {
  isSaving.value = true
  await new Promise(resolve => setTimeout(resolve, 1000))
  isSaving.value = false
}
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Permissions</h1>
        <p class="text-sm text-gray-500">Configure role-based access control</p>
      </div>
      <BaseButton :loading="isSaving" @click="savePermissions">
        <Save class="w-4 h-4 mr-2" />
        Save Changes
      </BaseButton>
    </div>

    <BaseCard padding="none">
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Permission
              </th>
              <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Admin
              </th>
              <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Editor
              </th>
              <th class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
              </th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <template v-for="group in permissionGroups" :key="group.name">
              <tr class="bg-gray-50">
                <td colspan="4" class="px-6 py-3">
                  <div class="flex items-center gap-2">
                    <component :is="group.icon" class="w-4 h-4 text-gray-500" />
                    <span class="font-medium text-gray-900">{{ group.name }}</span>
                  </div>
                </td>
              </tr>
              <tr v-for="permission in group.permissions" :key="permission.id">
                <td class="px-6 py-3 pl-12 text-sm text-gray-700">
                  {{ permission.label }}
                </td>
                <td class="px-6 py-3 text-center">
                  <div class="flex justify-center">
                    <BaseCheckbox :model-value="permission.admin" />
                  </div>
                </td>
                <td class="px-6 py-3 text-center">
                  <div class="flex justify-center">
                    <BaseCheckbox :model-value="permission.editor" />
                  </div>
                </td>
                <td class="px-6 py-3 text-center">
                  <div class="flex justify-center">
                    <BaseCheckbox :model-value="permission.author" />
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
    </BaseCard>
  </div>
</template>
