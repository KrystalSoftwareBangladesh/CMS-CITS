<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import BaseBadge from '@/components/ui/BaseBadge.vue'
import { Plus, Edit, Trash2, Shield, Users, FileText, Settings, Image } from 'lucide-vue-next'

const roles = [
  {
    id: '1',
    name: 'Administrator',
    description: 'Full access to all resources and settings',
    usersCount: 2,
    permissions: ['All permissions'],
    color: 'danger'
  },
  {
    id: '2',
    name: 'Editor',
    description: 'Can manage content and media',
    usersCount: 5,
    permissions: ['Content', 'Media', 'Users (view)'],
    color: 'primary'
  },
  {
    id: '3',
    name: 'Author',
    description: 'Can create and manage own content',
    usersCount: 8,
    permissions: ['Content (own)', 'Media (own)'],
    color: 'info'
  },
  {
    id: '4',
    name: 'Viewer',
    description: 'Read-only access to content',
    usersCount: 15,
    permissions: ['View only'],
    color: 'default'
  }
]
</script>

<template>
  <div class="space-y-6">
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 class="text-2xl font-bold text-gray-900">Roles</h1>
        <p class="text-sm text-gray-500">Manage user roles and their permissions</p>
      </div>
      <BaseButton>
        <Plus class="w-4 h-4 mr-2" />
        Create Role
      </BaseButton>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <BaseCard
        v-for="role in roles"
        :key="role.id"
        hoverable
        class="group"
      >
        <div class="flex items-start justify-between">
          <div class="flex items-center gap-3">
            <div
              :class="[
                'p-2 rounded-lg',
                role.color === 'danger' ? 'bg-red-100' :
                role.color === 'primary' ? 'bg-primary-soft' :
                role.color === 'info' ? 'bg-blue-100' : 'bg-gray-100'
              ]"
            >
              <Shield
                :class="[
                  'w-5 h-5',
                  role.color === 'danger' ? 'text-red-600' :
                  role.color === 'primary' ? 'text-primary' :
                  role.color === 'info' ? 'text-blue-600' : 'text-gray-600'
                ]"
              />
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">{{ role.name }}</h3>
              <p class="text-sm text-gray-500">{{ role.description }}</p>
            </div>
          </div>
          <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button class="p-1.5 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded">
              <Edit class="w-4 h-4" />
            </button>
            <button class="p-1.5 text-gray-400 hover:text-red-600 hover:bg-gray-100 rounded">
              <Trash2 class="w-4 h-4" />
            </button>
          </div>
        </div>

        <div class="mt-4 pt-4 border-t border-gray-100">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-1 text-sm text-gray-500">
              <Users class="w-4 h-4" />
              <span>{{ role.usersCount }} users</span>
            </div>
            <div class="flex gap-1">
              <BaseBadge
                v-for="permission in role.permissions.slice(0, 2)"
                :key="permission"
                size="sm"
              >
                {{ permission }}
              </BaseBadge>
              <BaseBadge v-if="role.permissions.length > 2" size="sm" variant="default">
                +{{ role.permissions.length - 2 }}
              </BaseBadge>
            </div>
          </div>
        </div>
      </BaseCard>
    </div>
  </div>
</template>
